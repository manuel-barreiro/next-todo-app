import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-3xl px-8 py-3">
        <Link href={"/"} className="text-white font-bold">
            <Image priority src="/logo.png" width={70} height={70} alt="logo" className="hover:scale-105 duration-500 ease-in-out"/>
        </Link>
        <Link href={"/addTopic"} className="bg-white rounded-xl p-2 font-bold border border-slate-100 hover:scale-105 duration-500 ease-in-out">
            Add Task
        </Link>
    </nav>
  )
}

export default Navbar