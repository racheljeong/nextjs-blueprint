'use client';
import Link from "next/link";
import { useRouter } from "next/router";
import {usePathname} from "next/navigation";

export default function Navbar() {

    const router = useRouter();
    console.log(router); //url정보, pathname등 알 수 있음
    const path = usePathname();
    // Public에 있는 파일들은 별도의 경로 필요없이 /파일명으로 가져다쓰면 됨
    return (
        <nav>
        <Link href="/" style={{color : router.pathname === "/" ? "salmon" :"lavender"}}>Home</Link>
        <Link href="/about" style={{color : router.pathname === "/about" ? "salmon" :"lavender"}}>About</Link>
        
        <style jsx>{`
        
        nav {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        .active {
            color: tomato;
        }
    
    `}</style>
    </nav>
    );
}