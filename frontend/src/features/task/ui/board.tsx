import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getTasks, createTask } from "../api";

import { TaskCard } from "./card";
import { CreateTaskForm } from "./form";

import { useTaskWebSocket } from "../model";

export const Board = () => {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);

  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  useTaskWebSocket();

  return (
    <main className="p-6">
      <header className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Kanban</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + New Task
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["todo", "in_progress", "done"].map((status) => (
          <div key={status} className="bg-white rounded p-3 shadow">
            <h2 className="font-semibold capitalize mb-2">
              {status.replace("_", " ")}
            </h2>
            {tasks
              .filter((t) => t.status === status)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        ))}
      </div>

      {showForm && (
        <CreateTaskForm
          onSubmit={(data) => mutation.mutate(data)}
          onClose={() => setShowForm(false)}
        />
      )}
    </main>
  );
};
