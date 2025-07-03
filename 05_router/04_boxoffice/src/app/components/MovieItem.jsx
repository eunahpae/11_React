import Link from "next/link";

export default function MovieItem({ movie }) {
    return (
        <Link href={`/movie/${movie.movieCd}`}>

            <div className="item">
                <h3>순위 : {movie.rank}</h3>
                <h2>{movie.movieNm}</h2>
                <h4>개봉일 : {movie.openDt}</h4>
                <h4>누적 관객수 : {Number(movie.audiAcc).toLocaleString()} 명</h4>
            </div>
        </Link>
    )
}