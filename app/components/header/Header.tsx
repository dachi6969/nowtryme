"use client"

import { AlignJustify } from "lucide-react";
import Image from "next/image";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import DeskMenu from "./desktopMenu/DeskMenu";

const Header = () => {
    const homePage = useRouter();
    const homeRoute = () => {
        homePage.push("/");
    }
    return(
        <header className={styles.header}>
            <div className={styles.titleWrapper}>
                <Image 
                src="/logo.png" 
                alt="Ucha's Furniture"
                width={55}
                height={55}
                className={styles.logo}
                onClick={homeRoute}
            />
            <span className={styles.title}>
                Ucha's Furniture
            </span>
            </div>
            <AlignJustify className={styles.menuIcon} color="#DCD7C9"/>
            <DeskMenu />
        </header>
    )
}


export default Header;