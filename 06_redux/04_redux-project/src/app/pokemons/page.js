'use client';
import { getPokemons } from "@/modules/pokemonSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function Pokemons() {
    // Fixed: changed state.Pokemons to state.pokemons (lowercase)
    const { list, loading } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]); // Added dispatch to dependency array

    return (
        <>
            <h1>포켓몬 이름 목록</h1>
            {loading && <p>Loading...</p>}
            <ul>
                {list.results?.map((pokemon, idx) => (
                    <li key={idx}>{pokemon.name}</li> 
                ))}
            </ul>
        </>
    )
}