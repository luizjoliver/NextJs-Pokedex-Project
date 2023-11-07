'use client'

import { useParams } from 'next/navigation'
import Link from "next/link"

type PokeTypes = {
    [key: string]: string;
}



let pokeTypes : PokeTypes = {
    fire: '🔥',
    water:'💧',
    poison:'☣️',
    normal:'⚪',
    flying:'💨',
    grass:'🌿',
    bug:'🐞',
    steel:'🔩',
    dragon:'🐉',
    fairy:'🧚‍♀️',
    fighting:'🥊',
    ghost:'👻',
    ice:'❄️',
    psychic:'🔮',
    dark:'🌑',
    rock:'🗿',
    ground:'🌰',
    electric:'⚡'

}

type dataPokemon = {
    data:{
        sprites:{
            front_default:string
        },
        height: number,
        weight:number,
        name:string,
        order:number,
        types:[
            {
                slot:number,
                type:{
                    name:string,
                    url:string
                }
            }
        ]
    }
    
}

export default function PokemonProfile({data} : dataPokemon){
    
    const params = useParams()
    const id  = +params.id
    const nextId = id + 1
    const previousId = id > 1 ? id - 1 : 1

    return(
        <>
        <div className="flex  flex-col border-2 border-yellow-200 w-56 h-5/6 text-center text-black bg-red-400 ">
            <img src={data.sprites.front_default} alt="PokemonImg" />

                <p className="text-center font-extrabold text-xl mb-2 ">{data.name}</p>
                <p>N.º Pokedex:{data.order}</p>
                <p>Weight: {data.weight} Kg</p>
                <p>Height: {data.height}</p>
                <ul>Type:{data.types.map((value) =><li  className="inline-block" key={value.slot}>{pokeTypes[value.type.name]} </li>)} </ul> 

           <div className='flex justify-between p-2'>
               <Link
               className="text-right text-sm  cursor-pointer hover:text-white"
               href={`/pokemon/${previousId}`}>
                    Back
               </Link>
               <Link
               className="text-left cursor-pointer text-sm  hover:text-white"
               href={`/pokemon/${nextId}`}>
                    Next
               </Link>
           </div>
            
        </div>
        </>
    )
}


