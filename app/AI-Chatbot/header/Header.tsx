"use client"

import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

const Header = () => {
    const router = useRouter();
    const homeRoute = () => {
        router.push("/");
    }
    return(
        <header className={styles.header}>
            <span className={styles.mainTitle} onClick={homeRoute}>
                Ucha's Furniture
            </span>
            
        </header>
    )
}

export default Header;