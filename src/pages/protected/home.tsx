import { useTaskData, useUserSession } from "@/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TaskCard from "@/components/tasks/task-card";

export default function HomePage() {
  const { name } = useUserSession();
  const { tasks } = useTaskData();
  const pendingTasks = tasks.filter((el) => !el.is_completed);
  const completedTasks = tasks.filter((el) => el.is_completed);
  return (
    <div className="p-4 lg:p-8 text-sm lg:text-base h-full">
      <div className="max-w-90 lg:max-w-120 mx-auto grid gap-6 md:gap-10 bg-accent dark:bg-card p-4 rounded-sm grid-rows-[auto_1fr] h-full">
        <p className="font-semibold text-lg lg:text-xl">
          Welcome back, {name} 👋
        </p>
        <div className="overflow-y-auto">
          <Tabs defaultValue="pending" className="h-full gap-6">
            <TabsList>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="overflow-y-auto">
              {!pendingTasks.length ? (
                <div className="h-full flex items-center justify-center text-base lg:text-lg font-semibold">
                  No Pending Task Available
                </div>
              ) : (
                <div className="grid gap-3">
                  {pendingTasks.map((el) => (
                    <TaskCard key={el.task_id} task={el} isShowAction={false} />
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent
              value="completed"
              className="overflow-y-auto no-scrollbar"
            >
              {!completedTasks.length ? (
                <div className="h-full flex items-center justify-center text-base lg:text-lg font-semibold">
                  No Completed Task Available
                </div>
              ) : (
                <div className="grid gap-3">
                  {completedTasks.map((el) => (
                    <TaskCard key={el.task_id} task={el} isShowAction={false} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
