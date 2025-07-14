"use client"

import { AlignJustify, Github } from "lucide-react";
import Image from "next/image";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import DeskMenu from "./desktopMenu/DeskMenu";
import MobileMenu from "./mobileMenu/MobileMenu";
import { useModal } from "@/app/store/useMenuStore";
import MenuDrawer from "./menuDrawer/MenuDrawer";

const Header = () => {
    const router = useRouter();
    const {mobileMenu,openMobileM} = useModal();
    const homeRoute = () => {
        router.push("/");
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
            <span className={styles.mobileTitle}>
                Ucha's Furniture
            </span>

            <div className={styles.iconWrapper}>
                <a 
                href="https://github.com/dachi6969"
                target="_blank"
                aria-label="github repo link"
                style={{paddingTop:"4px"}}
                >
                    <Github 
                    aria-hidden={true}
                    className={styles.gitIcon}
                    />
                </a>
                <AlignJustify 
                className={styles.menuIcon}
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