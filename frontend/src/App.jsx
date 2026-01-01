import { useEffect, useState } from 'react'
import { getTasks, createTask, deleteTask } from './services/tasks'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTasks()
    .then(res => setTasks(res.data))
    .finally(() => setLoading(false))
  }, [])

  const handleAddTask = async (title) => {
    const res = await createTask(title)
    setTasks(prev => [...prev, res.data])
  }

  const handleDeleteTask = async (id) => {
    await deleteTask(id)
    setTasks(prev => prev.filter(task => task.id !== id)) 
  }

  if (loading) return <p>Carregando...</p>

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h1>📝 To‑Do</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  )

}

export default App
