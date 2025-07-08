import { Avatar } from "antd";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="bg-black text-sm flex justify-center items-center min-w-screen min-h-screen">
            <div className="bg-gray-800 w-xs rounded-xl flex flex-col items-center gap-5 pt-5 pb-3">
                <Avatar size={64} src='/images/profile/avatar-jessica.jpeg' />
                <div>
                    <p className="text-white font-semibold text-2xl">Jessica Randall</p>
                    <p className="text-[#c5f82a] text-center">London, United Kingdom</p>
                </div>
                <div className="text-gray-500">
                    <p>"Front-end developer and avid reader."</p>
                </div>
                <div className="w-full px-7 font-bold text-white">
                    <Link href='' className="block w-full text-center py-2 mb-3 rounded-lg bg-gray-700 hover:bg-[#c5f82a] hover:text-black ">Github</Link>
                    <Link href='' className="block w-full text-center py-2 mb-3 rounded-lg bg-gray-700 hover:bg-[#c5f82a] hover:text-black ">Frontend Mentor</Link>
                    <Link href='' className="block w-full text-center py-2 mb-3 rounded-lg bg-gray-700 hover:bg-[#c5f82a] hover:text-black ">Linkedin</Link>
                    <Link href='' className="block w-full text-center py-2 mb-3 rounded-lg bg-gray-700 hover:bg-[#c5f82a] hover:text-black ">Twitter</Link>
                    <Link href='' className="block w-full text-center py-2 mb-3 rounded-lg bg-gray-700 hover:bg-[#c5f82a] hover:text-black ">Instagram</Link>
                </div>
            </div>
        </div>
    );
}