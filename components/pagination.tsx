import Link from "next/link"

const generatePagination = (current:number,total:number) =>{

  const sides = 2

  let pages = []
  let start = Math.max(current - sides , 1)
  let end = Math.min(current + sides,total)

  console.log(start);
  
  
if(start > 1) pages.push({number:1 , label:"First"})


  for(let i = (start - 1) ; i < end ; i++){
    
    pages.push({number:i + 1,offset: i * 24,label:i+1})
  }

  if(end < total){
    pages.push({number:total,offset: total * 24,label:"Last"})
  }

  pages[0].label = "first"
 
   
  
  
  return pages

}



export default function Pagination({lastPage,currentPage,offset}:{lastPage:number,currentPage:number, offset:number}) {
  
 const pages =  generatePagination(currentPage,lastPage)
 
 
 const baseStyles = "flex h-10 w-[6ch] items-center bg-black text-gray-500 justify-center border-x border-gray-900 px-4 leading-tight text-white  hover:bg-gray-800"

 return (
   <ul className="inline-flex h-10 -space-x-px text-base">
     {pages.map((page) =>{
       

     return(
     <li key={page.label}>

       <Link 
       href={`?limit=24&offset=${page.offset}`}
       className={`${baseStyles} ${currentPage === page.number ?'text-yellow-200' :' text-white'}`}
       >
         {page.label}

       </Link>
     </li>
     )
   })}
   </ul>
 )
}
