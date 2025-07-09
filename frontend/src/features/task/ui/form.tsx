import { useState } from "react";

import type { Task } from "@/shared/types/task";

export const CreateTaskForm = ({
  onSubmit,
  onClose,
}: {
  onSubmit: (data: {
    title: string;
    status: Task["status"];
    color: string;
  }) => void;
  onClose: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<Task["status"]>("todo");
  const [color, setColor] = useState("#60a5fa");

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim()) return;
          onSubmit({ title, status, color });
          onClose();
        }}
        className="bg-white p-6 rounded shadow space-y-4 w-full max-w-sm"
      >
        <h2 className="text-xl font-bold">New Task</h2>
        <input
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <select
          className="w-full border px-3 py-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value as Task["status"])}
        >
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10"
        />
        <div className="flex justify-between">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            type="submit"
          >
            Create
          </button>
          <button className="text-gray-600" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
