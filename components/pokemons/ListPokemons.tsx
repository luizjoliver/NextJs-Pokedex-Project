import Link from "next/link";
import { CgPokemon } from "react-icons/cg";

type PokemonData = {
    pokemons: {
      name: string;
      url: string;
    }[],
    metadatapoke?:{
        pagination:{
            currentPage:number,
            lastPage:number
        }
    }
  };

export default function ListPokemons({pokemons,metadatapoke}:PokemonData) {
    
     
  return (
    <div className="flex items-center gap-1 flex-wrap justify-center h-full w-full">
       {pokemons.map((pokemon,index) => {
  
        
        const idPokemon = Number(pokemon.url.match(/(?<=\/)(\d+)(?=\/)/g))
          
          
              return <div key={pokemon.url}
              className="
              flex items-center justify-center border-2 border-yellow-200 w-24 h-28 text-center text-white
              hover:bg-red-400 hover:text-black"
              >
              <Link href={`pokemon/${idPokemon}`}>{pokemon.name} <span className="flex items-center justify-center"><CgPokemon/> </span></Link>
          
              </div>
          
              })}
             
    </div>
  )
}
