import Link from "next/link";

export default function Footer(){
    return(
        <nav className="bg-slate-600 w-full h-[10vh]  flex items-center justify-center">
            <p>Created By  
            <Link 
                href={"https://github.com/luizjoliver"}
                className="text-white hover:text-yellow-200" 
                target="_blank"> Luiz Joliver
                </Link> &copy;
            </p>
      </nav>
    )
}