"use client"
import Link from "next/link";
import styles from "./DeskMenu.module.css";
import { useModal } from "@/app/store/useMenuStore";
import { useColored } from "@/app/store/useColores";
import Cart from "../../cart/Cart";

const DeskMenu = () => {
    const {openAbout} = useModal();
    const {scrolled} = useColored();
    const scrolledClr = scrolled ? `${styles.nav} ${styles.navScrolled}` : styles.nav;
    return(
        <nav className={scrolledClr}>   
            <Cart />
            <Link href="/" className={styles.navItem}>
                Home
            </Link>
            <Link href="/AI-Chatbot" className={styles.navItem}>
                AI-Chat
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