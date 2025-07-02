'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname(); // 현재 경로 가져오기

    const isActive = (path) => pathname === path;

    const activeStyle = {
        backgroundColor: "yellow",
        color: "red"
    }

    return (
        <>
            <div>
                <ul>
                    <li><Link href="/" style={isActive('/') ? activeStyle : undefined}>HOME</Link></li>
                    <li><Link href="/menu" style={isActive('/menu') ? activeStyle : undefined}>MENU</Link></li>
                    <li><Link href="/about" style={isActive('/about') ? activeStyle : undefined}>ABOUT</Link></li>
                    <li><Link href="/dashboard" style={isActive('/dashboard') ? activeStyle : undefined}>DASHBOARD</Link></li>
                </ul>
            </div>
        </>
    )
}