"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


const EditTaskForm = ({id, title, description}) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
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
          className="border border-slate-500 px-8 py-2" 
          type="text" 
          placeholder="Task Title"
          name="title" />

        <input 
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="border border-slate-500 px-8 py-2" 
          type="text" 
          placeholder="Task Description"
          name="description" 
        />

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Update Task
        </button>
    </form>
  )
}

export default EditTaskForm