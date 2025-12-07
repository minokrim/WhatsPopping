import { IoHomeOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineEventSeat } from "react-icons/md";
import Link from "next/link";
export default function CreatorSideNav(){
    return <div className="bg-[#160d43] text-white w-max p-5 h-screen text-4xl flex items-center justify-center">
        <section className="flex flex-col h-[80%] justify-around">
        <Link href="/"><IoHomeOutline/></Link>
        <Link href="/"><IoTicketOutline/></Link>
        <Link href="/"><MdOutlineEventSeat/></Link>
        <Link href="/"><FaRegComments/></Link>
        <Link href="/"><CiSettings/></Link>
        <Link href="/"><FaSignOutAlt className="text-red-600"/></Link>
        </section>
    </div>
}