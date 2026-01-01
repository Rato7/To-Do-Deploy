export default function TaskItem({ task, onDelete }) {
    return (
        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
            {task.title}
            <button onClick={() => onDelete(task.id)}>❌</button>
        </li>
    )
}