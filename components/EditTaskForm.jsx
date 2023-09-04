"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const EditTaskForm = ({id, title, description}) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTitle, newDescription})
      })

      if (!res.ok) {
        throw new Error("Failed to update task.")
      }

      router.refresh()
      router.push("/")
      
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
        <input 
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border rounded-3xl border-slate-500 px-8 py-2" 
          type="text" 
          placeholder="Task Title"
          name="title" />

        <input 
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="border rounded-3xl border-slate-500 px-8 py-2" 
          type="text" 
          placeholder="Task Description"
          name="description" 
        />

        <div className="flex">
          <button type="submit" className="bg-[#2a3342] text-white rounded-xl p-2 font-bold border hover:border-white duration-500 ease-in-out basis-1/2">
              Update
          </button>

          <Link href={"/"} className="bg-red-500 text-center text-white rounded-xl p-2 font-bold border hover:border-white duration-500 ease-in-out basis-1/2">
              Cancel
          </Link>
        </div>
    </form>
  )
}

export default EditTaskForm