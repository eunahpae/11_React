'use client';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPokemons = createAsyncThunk(
    'pokemons/getPokemons',
    async (url = 'https://pokeapi.co/api/v2/pokemon') => {
        const response = await fetch(url);
        const data = await response.json(); 
        return data;    // -> action.payload에 담김
    }
);

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        list: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemons.pending, (state) => { 
                state.loading = true;
            })
            .addCase(getPokemons.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
    }
});

export default pokemonSlice.reducer;