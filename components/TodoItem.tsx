"use client"

interface TodoItemProps {
  id: string
  title: string
  isComplete: boolean
  toggleTodo: (
    id: string,
    isComplete: boolean
   ) => void
}

export const TodoItem = ({
  id,
  title,
  isComplete,
  toggleTodo
}: TodoItemProps) => {
  return (
    <li 
      key={id} 
      className="flex gap-1 items-center"
    >
      <input 
        id={id} 
        type="checkbox" 
        className="cursor-pointer peer"
        defaultChecked={isComplete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label 
        htmlFor="id" 
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  )
}
