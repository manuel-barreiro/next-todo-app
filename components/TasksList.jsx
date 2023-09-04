import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from 'react-icons/hi'

async function getTasks() {
    try {
        const res = await fetch("http://localhost:3000/api/tasks", {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch tasks.")
        }

        return res.json()
    } catch (error) {
        console.log("Error loading tasks:", error)
    }
}

const TasksList = async () => {

  const { tasks } = await getTasks(); 

  return (
    <>
        { tasks.map((task) => (
            
            <div key={task._id} className="p-4 border border-slate-300 my-3 flex justify-between items-start">
                <div>
                    <h2 className="font-bold text-2xl">{task.title}</h2>
                    <div>{task.description}</div>
                </div>

                <div className="flex items-center gap-2">
                    <RemoveBtn id={task._id} />
                    <Link href={`/editTopic/${task._id}`}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </div>
            </div>

        ))}
    </>
  )
}

export default TasksList