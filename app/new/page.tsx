import { db } from '@/lib/db'
import Link from 'next/link'
import { redirect } from 'next/navigation'

async function create(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  if(typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title")
  }

  await db.todo.create({
    data: {
      title,
      isComplete: false
    }
  })

  redirect("/")
}

export default function NewItem() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
      </div>
      <form 
        className="flex gap-2 flex-col"
        action={create}
      >
        <input 
          type="text" 
          name="title"
          placeholder='Type something to do' 
          className='border border-slate-300 rounded px-2 py-1 outline-none focus-within:border-slate-100 text-slate-800' 
        />
        <div
          className='flex gap-1 justify-end'
        >
          <Link
            href=".."
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
