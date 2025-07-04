

import Link from "next/link";
import styles from "./DeskMenu.module.css";

const DeskMenu = () => {
    return(
        <nav className={styles.nav}>   
        <Link href="/">
            Home
        </Link>
        <Link href="/">
            About
        </Link>
        <Link href="/">
            Contact
        </Link>
        <Link href="/">
            Catalogue
        </Link>

        </nav>
    )
}


export default DeskMenu;