"use client"

import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/store/useTheme";

const Header = () => {
    const router = useRouter();
    const {themeOn,lightOff,lightOn} = useTheme();
    const homeRoute = () => {
        router.push("/");
    }
    return(
        <header className={styles.header}>
            <span className={styles.mainTitle} 
            onClick={homeRoute}
            >
                Ucha's Furniture
            </span>

            {themeOn ? 
            <Moon 
            size={35} 
            color={'black'} 
            style={{paddingTop: "4px",cursor: "pointer"}} 
            onClick={lightOff}
            />:
            <Sun 
            size={35} 
            color={'#E6E6E6'} 
            style={{paddingTop: "4px", cursor: "pointer"}} 
            onClick={lightOn}
            />}
        </header>
    )
}

export default Header;
