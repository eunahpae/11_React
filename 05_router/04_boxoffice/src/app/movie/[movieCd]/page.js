'use client';
import { getMovieDetail } from "@/apis/MovieAPI";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function MovieDetail() {

    const { movieCd } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        getMovieDetail(movieCd).then(data => setMovie(data));
    }, [])


    return (
        <div className="content-col">
            {movie && (
                <>
                    <h1>{movie.movieNm} ({movie.movieNmEn})</h1>
                    <div>러닝 타임 : {movie.showTm}분</div>
                    <div>
                        국가 :{" "}
                        {movie.nations.map((nation, index) => (
                            <span key={index}>{nation.nationNm} </span>
                        ))}
                    </div>

                    <h4>출연</h4>
                    <div>
                        {movie.actors.map((actor, index) => (
                            <div key={index} className="actor">
                                <span>{actor.peopleNm}</span>
                                {actor.cast && <span> - {actor.cast}역</span>}
                            </div>
                        ))}
                    </div>
                    <Link href="/movie">목록으로</Link>
                </>
            )}
        </div>
    );
}
