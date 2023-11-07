import Pagination from "@/components/pagination"
import ListPokemons from "@/components/pokemons/ListPokemons"

type PageProps = {
  searchParams?:{
    limit?:string,
    offset?:string
  }
}
type RequestData = {
  data: {
    results: [{
      name:string,
      url:string
    }]
  },
  metadata:{
      pagination:{
          currentPage:number,
          lastPage:number,
          nextPage?:number,
          previousPage?:number
      }
  }
}

export default async function Home({ searchParams }: PageProps) {

  const offset = Number(searchParams?.offset) ||0
  const limit = Number(searchParams?.limit) || 24
  const {data,metadata:{pagination:{currentPage,lastPage}}} = await getPokemons(offset,limit)

  
  
  
  return (
    <div className="bg-slate-400 w-full h-[80vh] flex items-center justify-center ">
      <div className="bg-black w-[90vw] h-[60vh]">
        <ListPokemons pokemons={data.results}  /> 
        <Pagination lastPage={lastPage} currentPage={currentPage} offset={offset} />
      </div>
    </div>
  );
}



export async function getPokemons (offset:number = 0,limit:number = 24): Promise<RequestData>{

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

  return await fetch(url).then(async (response) =>{
    const data = await response.json()

    const total = data.count
    const totalPages = Math.ceil(total/limit)
    const currentPage = (offset/limit) + 1
   
    return {data,
      metadata:{
        pagination:{
          lastPage:totalPages,
          currentPage
        }
    }}
  })

     
    
  
  }