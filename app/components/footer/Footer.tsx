"use client"

import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { Github, Instagram } from "lucide-react";



const Footer = () => {
    const [isopen,setIsopen] = useState(false);
    const [isDesktop,setIsDesktop] = useState<boolean>(false);
    useEffect(() => {
        const isAbove = window.innerWidth > 480;
        setIsDesktop(isAbove)
    },[])
    return(
        <footer className={styles.footer}>
            <div className={styles.wrapper} onClick={() => {setIsopen(prev => !prev)}}>
                <span style={{color:"white"}}>
                    {isDesktop ? "CONTACT US:" : "Contacts"}
                </span>
            <div className={styles.drop} 
            style={{
                display: isopen || isDesktop ? "flex" : "none",
                maxHeight: isopen || isDesktop ? 200 : 0
            }}>
                <span>Num: +995-597-99-00-02</span>  
                <span>IG: @Ucha's Furniture</span>
                <span>Github: @dachi6969</span>

                <div style={{display:"flex",gap: "10px", justifyContent: "flex-end"}}>
                    <Github 
                    size={25} 
                    onClick={() => window.open('https://github.com/dachi6969',"_blank")} style={{cursor: "pointer"}}/>
                    <Instagram 
                    size={25} 
                    onClick={() => window.open('https://instagram.com/',"_blank")} style={{cursor: "pointer"}}/>
                </div>
            </div>
            </div>

        </footer>
    )
}


export default Footer;