import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import TaskCard from "@/components/tasks/task-card";
import { Button } from "@/components/ui/button";
import { BiLoader } from "react-icons/bi";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateTaskSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { FaAsterisk } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sleep } from "@/lib/utils";
import { useTaskData } from "@/store";
import { useState } from "react";
import { toast } from "sonner";

export default function TasksPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (state: boolean) => setIsOpen(state);
  const { addTask, tasks } = useTaskData();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof CreateTaskSchema>>({
    resolver: zodResolver(CreateTaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const pendingTask = tasks.filter((el) => !el.is_completed);
  async function onSubmit({
    title,
    description,
  }: z.infer<typeof CreateTaskSchema>) {
    await sleep(2000);
    const newTask = {
      task_id: uuidv4(),
      title,
      description,
    };
    addTask(newTask);
    reset();
    setIsOpen(false);
    toast.success("New task successfully addedd");
  }
  return (
    <div className="p-4 lg:p-8 text-sm lg:text-base h-full">
      <div className="max-w-170 mx-auto grid gap-6 md:gap-10 bg-accent dark:bg-card p-4 rounded-sm grid-rows-[auto_1fr] h-full">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-base lg:text-xl">Task List</p>
          <Dialog open={isOpen} onOpenChange={handleOpen}>
            <DialogTrigger asChild>
              <Button size={"icon-sm"}>Create New</Button>
            </DialogTrigger>
            <DialogContent
              className="sm:max-w-106.25 p-4 gap-8"
              aria-describedby={undefined}
            >
              <DialogHeader>
                <DialogTitle>Add New Task</DialogTitle>
              </DialogHeader>
              <form
                id="task-create"
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FieldGroup>
                  <Controller
                    name="title"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="gap-2"
                      >
                        <FieldLabel
                          htmlFor="title"
                          className="font-normal relative max-w-fit"
                        >
                          Title
                          <FaAsterisk className="absolute top-0.5 right-0 translate-x-[calc(100%+4px)] size-1.5 text-error-04" />
                        </FieldLabel>
                        <Input
                          {...field}
                          type="text"
                          id="title"
                          aria-invalid={fieldState.invalid}
                          placeholder="Ex: Do your home work"
                          autoComplete="off"
                          disabled={isSubmitting}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="description"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="gap-2"
                      >
                        <FieldLabel
                          htmlFor="description"
                          className="font-normal relative max-w-fit"
                        >
                          Description
                          <FaAsterisk className="absolute top-0.5 right-0 translate-x-[calc(100%+4px)] size-1.5 text-error-04" />
                        </FieldLabel>
                        <Textarea
                          {...field}
                          id="description"
                          aria-invalid={fieldState.invalid}
                          placeholder="I'm a software engineer..."
                          className="min-h-30"
                          disabled={isSubmitting}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </form>
              <DialogFooter className="grid grid-cols-[1fr_1fr]">
                <DialogClose asChild>
                  <Button variant="outline" disabled={isSubmitting}>
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  form="task-create"
                  type="submit"
                  disabled={isSubmitting}
                  className="relative"
                >
                  {isSubmitting ? (
                    <BiLoader className="size-6 lg:size-7 animate-spin absolute" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          {!pendingTask.length ? (
            <div className="h-full flex items-center justify-center text-base lg:text-lg font-semibold">
              No Pending Task Available
            </div>
          ) : (
            <div className="overflow-y-auto grid gap-3 content-start">
              {pendingTask.map((el) => (
                <TaskCard key={el.task_id} task={el} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
