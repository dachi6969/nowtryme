"use client"

import { AlignJustify, Github } from "lucide-react";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import DeskMenu from "./desktopMenu/DeskMenu";
import MobileMenu from "./mobileMenu/MobileMenu";
import { useModal } from "@/app/store/useMenuStore";
import MenuDrawer from "./menuDrawer/MenuDrawer";
import { useColored } from "@/app/store/useColores";

const Header = () => {
    const router = useRouter();
    const {openMobileM} = useModal();
    const {scrolled} = useColored();
    const homeRoute = () => {
        router.push("/");
    }
    const headStyle: string = scrolled ? `${styles.header} ${styles.headerClr}` : styles.header;
    const titleStyle: string = scrolled ? `${styles.title} ${styles.titleClr}` : styles.title;
    const gitIconClr: string = scrolled ? `${styles.gitIcon} ${styles.gitIconClr}` : styles.gitIcon;
    const menuIconClr: string = scrolled ? `${styles.menuIcon} ${styles.menuIconClr}` : styles.menuIcon;
    const mobileTitleClr: string = scrolled ? `${styles.mobileTitle} ${styles.mobileTitleClr}` : styles.mobileTitle;
    return(
        <header className={headStyle}>
            
            <div className={styles.titleWrapper}>
            <span className={titleStyle} onClick={homeRoute}>
                Ucha's Furniture
            </span>
            <span className={mobileTitleClr} onClick={homeRoute}>
                Ucha's Furniture
            </span>
            </div>


            <div className={styles.iconWrapper}>
                <a 
                href="https://github.com/dachi6969"
                target="_blank"
                aria-label="github repo link"
                style={{paddingTop:"4px"}}
                >
                    <Github 
                    aria-hidden={true}
                    className={gitIconClr}
                    />
                </a>
                <AlignJustify 
                className={menuIconClr}
                aria-label="menu icon"
                onClick={openMobileM}
                />
            </div>
            
            <MenuDrawer />
            <DeskMenu />
            <MobileMenu />
        </header>
    )
}


export default Header;