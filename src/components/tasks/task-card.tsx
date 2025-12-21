import { MdDelete, MdCheckCircle } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useTaskData, type Task } from "@/store";
import { toast } from "sonner";

interface Props {
  task: Omit<Task, "is_completed">;
  isShowAction: boolean;
}
export default function TaskCard({ task, isShowAction }: Props) {
  const { completeTask, deleteTask } = useTaskData();
  function handleComplete() {
    completeTask(task.task_id);
    toast.success(`Task ${task.title} marked as complete`);
  }
  function handleDelete() {
    deleteTask(task.task_id);
    toast.success(`Task ${task.title} successfully deleted`);
  }
  return (
    <div className="bg-card dark:bg-black/50 p-2 lg:p-3 pl-3 lg:pl-5 rounded-sm flex items-center justify-between gap-10 border border-white/25">
      <div className="flex flex-col gap-4">
        <p className="text-base lg:text-lg">{task.title}</p>
        <p>{task.description}</p>
      </div>
      {isShowAction && (
        <div className="flex items-center gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost">
                <MdCheckCircle className="size-5 lg:size-6 text-green-500" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-110 gap-10">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-left">
                  Mark Task Complete
                </AlertDialogTitle>
                <AlertDialogDescription className="text-left">
                  By doing this, task{" "}
                  <span className="font-bold">{task.title}</span> will be marked
                  as complete
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="grid grid-cols-[1fr_1fr] gap-6">
                <AlertDialogCancel asChild>
                  <Button variant="outline" size={"icon-sm"}>
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction
                  asChild
                  onClick={handleComplete}
                  disabled={false}
                >
                  <Button type="button" size={"icon-sm"}>
                    Complete
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost">
                <MdDelete className="size-5 lg:size-6 text-red-500" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-110 gap-10">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-left">
                  Delete Task
                </AlertDialogTitle>
                <AlertDialogDescription className="text-left">
                  By doing this, task{" "}
                  <span className="font-bold">{task.title}</span> will be
                  deleted and cannot be retrieved
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="grid grid-cols-[1fr_1fr] gap-6">
                <AlertDialogCancel asChild>
                  <Button variant="outline" size={"icon-sm"}>
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction
                  asChild
                  onClick={handleDelete}
                  disabled={false}
                >
                  <Button
                    type="button"
                    size={"icon-sm"}
                    variant={"destructive"}
                    className="text-white"
                  >
                    Delete
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  );
}
