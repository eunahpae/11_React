import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">메인</Link>
                </li>
                <li>
                    <Link href="/pokemons">포켓몬 이름 목록</Link>
                </li>
            </ul>
        </div>
    )
}