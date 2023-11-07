

// const dynamicParams = false

import PokemonProfile from "@/components/pokemons/PokemonProfile";

interface dataPokemons {
    pokemon:[
      {
        name:string,
        url:string
      }
    ]
  }



export default async function Pokemon({params} :{params:{id:string}}) {

    

const data= await getPokemon(params.id)



    return(
        <div className="bg-slate-400 w-full h-[80vh] flex items-center justify-center ">
            <PokemonProfile data = {data}/>
        </div>
        
    )
}


async function getPokemon (id:string){
    const res = (await fetch(`https:pokeapi.co/api/v2/pokemon/${id}`,{
        next:{
            revalidate:60 
        }
    })).json()
    

    return res
}

   export async function generateStaticParams(){

        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008")

     const data = await res.json()
    
      const pokemons = data.results
    
     return pokemons.map((pokemon: dataPokemons,i: number) => ({
           id:String(i+1)
      }))
   }
