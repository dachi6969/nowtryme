"use client"
import { Github, Instagram } from "lucide-react";
import styles from "./footer.module.css";


export default function Footer () {
    const instagramOpen = () => {
        window.open("https://instagram.com/","_blank")
    }
    const githubOpen = () => {
        window.open("https://github.com/dachi6969/nowtryme", "_blank")
    }
    return(
        <footer className={styles.footer}>    
            <div className={styles.iconWrap}>
                <Instagram size={30} onClick={instagramOpen} style={{cursor: "pointer"}}/>
                <Github size={30} onClick={githubOpen} style={{cursor: "pointer"}}/>
            </div>
            © 2025 Ucha's Furniture. All rights reserved.
        </footer>
    )
}