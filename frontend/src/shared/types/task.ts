export type Task = {
  id: number
  title: string
  content?: string
  status: 'todo' | 'in_progress' | 'done'
  color?: string
  createdAt: string
  updatedAt: string
}
