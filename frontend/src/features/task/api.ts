import type { Task } from "@/shared/types/task"

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch('/api/tasks')
  if (!res.ok) throw new Error('Fetch error')
  return res.json()
}

export const createTask = async (task: Partial<Task>): Promise<Task> => {
  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  })
  if (!res.ok) throw new Error('Create error')
  return res.json()
}
