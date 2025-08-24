"use client"

import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import Cart from "@/app/components/cart/Cart";

const Header = () => {
    const route = useRouter();
    const homeRoute = () => {
        route.push('/')
    }
    return(
        <header className={styles.header}>
            <span className={styles.title} onClick={homeRoute}>
                Ucha's Furniture
            </span>
            <div style={{paddingTop: "4px",display: "flex", gap: "15px"}}>
                <Cart />
            </div>
        </header>
    )
}

export default Header;