import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/movie">

      <div className="content-row">
        <h1>박스오피스 영화 순위 보러 가기</h1>
      </div>

    </Link>
  );
}
