'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/navbar.module.css";

export default function Navbar() {

    const pathname = usePathname(); // 현재 경로 가져오기

    const isActive = (path) => pathname === path;

    const activeStyle = {
        backgroundColor: "white",
        color: "red"
    }

    return (
        <>
            <div className={styles.navbar}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link href="/" style={isActive('/') ? activeStyle : undefined}>HOME</Link></li>
                    <li className={styles.navItem}><Link href="/menu" style={isActive('/menu') ? activeStyle : undefined}>MENU</Link></li>
                    <li className={styles.navItem}><Link href="/about" style={isActive('/about') ? activeStyle : undefined}>ABOUT</Link></li>
                    <li className={styles.navItem}><Link href="/dashboard" style={isActive('/dashboard') ? activeStyle : undefined}>DASHBOARD</Link></li>
                </ul>
            </div>
        </>
    )
}