'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description){
      alert("Title and Description are required.");
      return;
    }

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description })
      })

      if (res.ok) {
        router.refresh()
        router.push("/");
      } else {
        throw new Error("Failed to create task.")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border rounded-3xl border-slate-500 px-8 py-2" 
          type="text" 
          placeholder="Task Title" 
        />

        <input 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border rounded-3xl border-slate-500 px-8 py-2" 
          type="text" 
          placeholder="Task Description" 
        />

        <div className="flex">
          <button type="submit" className="bg-[#2a3342] text-white rounded-xl p-2 font-bold border hover:border-white duration-500 ease-in-out basis-1/2">
              Add
          </button>

          <Link href={"/"} className="bg-red-500 text-center text-white rounded-xl p-2 font-bold border hover:border-white duration-500 ease-in-out basis-1/2">
              Cancel
          </Link>
        </div>
    </form>
  )
}

export default page