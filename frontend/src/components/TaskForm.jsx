import { useState } from "react";


export default function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!title.trim()) return;

        onAddTask(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nova tarefa..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}