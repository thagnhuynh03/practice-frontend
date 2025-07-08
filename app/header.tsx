import Link from "next/link";

export default function Header() {
    return (
        <nav>
            <div className="flex justify-between p-5 bg-gray-800 text-white">
                <div className="font-bold text-2xl">frontend</div>
                <li className="list-none flex space-x-4">
                    <ul className="hover:text-gray-400"><Link href='/recipe'>Recipe</Link></ul>
                    <ul className="hover:text-gray-400"><Link href='/profile'>Profile</Link></ul>
                </li>
            </div>
        </nav>
    );
}