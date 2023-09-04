import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from 'react-icons/hi'

async function getTasks() {

    const apiUrl = process.env.API_URL

    try {
        const res = await fetch(`${apiUrl}/api/tasks`, {
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
            
            <div key={task._id} className="p-4 border rounded-3xl bg-gradient-to-r from-gray-100 to-gray-300 border-slate-300 my-3 px-8 py-3 flex justify-between items-start hover:border-[#090c14] ease-in-out duration-500">
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