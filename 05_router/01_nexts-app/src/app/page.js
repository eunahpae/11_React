import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>메인 페이지입니다. </h1>
      <nav>

        <Link href="/">HOME</Link><br />
        <Link href="/about">소개</Link><br />
        <Link href="/menu">메뉴</Link><br />

      </nav>
    </>

  );
}
