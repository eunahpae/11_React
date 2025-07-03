'use client';
import { getMovieList } from "@/apis/MovieAPI";
import { useEffect, useState } from "react"
import MovieItem from "../components/MovieItem";

export default function MovieList() {

    const [movieList, setMovieList] = useState();

    useEffect(() => {
        getMovieList().then(data => setMovieList(data));
    }, []
    )

    return (
        movieList &&
        <div className="content-row">
            {movieList.map(movie => <MovieItem key={movie.movieCd} movie={movie} />)}
        </div>
    )
}