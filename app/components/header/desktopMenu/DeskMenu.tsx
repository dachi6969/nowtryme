"use client"
import Link from "next/link";
import styles from "./DeskMenu.module.css";
import { useModal } from "@/app/store/useMenuStore";

const DeskMenu = () => {
    const {openAbout} = useModal();
    return(
        <nav className={styles.nav}>   
            <Link href="/" className={styles.navItem}>
                Home
            </Link>
            <span className={styles.navItem} onClick={openAbout}>
                About
            </span>
            <Link href="/" className={styles.navItem}>
                Contact
            </Link>
            <Link href="/" className={styles.navItem}>
                Catalogue
            </Link>

        </nav>
    )
}


export default DeskMenu;