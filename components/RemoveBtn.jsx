"use client";

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi"

const RemoveBtn = ({ id }) => {

  const router = useRouter()

  async function removeTask() {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`/api/tasks?id=${id}`, {
        method: "DELETE"
      })

      if (res.ok) {
        router.refresh()
      }
      
    }
  }

  return (
    <button onClick={removeTask} className="text-red-400">
        <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn