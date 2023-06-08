import React, { useEffect, useState } from 'react'

const ToDo = ({ todo, handleDelete, handleComplete }) => {
  const [deadline, setDeadline] = useState(null);

  useEffect(() => {
    setDeadline(todo.finish_at ? todo.finish_at : `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);
  }, [todo]);



  return (
    <div className={`w-1/3 max-w-[300px] flex justify-between items-start gap-4 p-4 border rounded ${todo.priority === "High" ? "bg-red-200" : todo.priority === "Medium" ? "bg-yellow-200" : "bg-blue-200"}`}>
      <div className='flex flex-col justify-center items-start gap-1'>
        <div>
          <h3 className={`text-xl font-bold ${todo.completed && "line-through italic"}`}>{todo.todo}</h3>
          {todo.tag && <span className='text-sm text-gray-400'>{`#${todo.tag}`}</span>}
        </div>
        <p className={`${todo.completed && "line-through italic"}`}>{`Priority: ${todo.priority}`}</p>
        <p className={`${todo.completed && "line-through italic"}`}>{`Finish date: ${deadline}`}</p>
      </div>
      <div className='flex flex-col justify-center items-end gap-4'>
        <button onClick={() => handleDelete(todo.id)} className='py-1 px-2 border border-slate-500 hover:bg-slate-300 rounded cursor-pointer'>Delete</button>
        <button onClick={() => handleComplete(todo.id)} className='py-1 px-2 border border-slate-500 hover:bg-slate-300 rounded cursor-pointer'>Done</button>
      </div>

    </div>
  )
}

export default ToDo