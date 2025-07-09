import type { Task } from "@/shared/types/task";

export const TaskCard = ({ task }: { task: Task }) => (
  <div
    className="bg-gray-50 border-l-4 p-2 rounded"
    style={{ borderColor: task.color || "#ccc" }}
  >
    <div className="font-medium">{task.title}</div>
  </div>
);
