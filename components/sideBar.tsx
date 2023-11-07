import Link from "next/link"
import {CgPokemon} from "react-icons/cg"

export default function NavBar(){
    return(
        <nav className="bg-slate-600 w-full h-[10vh] flex items-center justify-center">
            <ul className="flex justify-between items-center w-full m-4">
                <li className="text-yellow-200 font-press">Pokemon Project</li>
               <Link href={"/"}
                className="text-white hover:text-red-400 cursor-pointer text-xl">
                    <CgPokemon/>
                </Link>
            </ul>
      </nav>
    )
}