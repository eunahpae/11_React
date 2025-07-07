import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../modules/pokemonSlice'

export const store = configureStore({
    reducer: {
        pokemons: pokemonReducer
    }
})