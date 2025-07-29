"use client"
import { useModal } from "@/app/store/useMenuStore";
import styles from "./MobileMenu.module.css";
import { BookImage, Contact, Facebook, Github, House, Info, Instagram, X } from "lucide-react";
import { useRouter } from "next/navigation";

const menuList = [
    {title: "Home", icon: <House />},
    {title: "About", icon: <Info />},
    {title: "Contact", icon: <Contact />},
    {title: "Catalogue", icon: <BookImage />},

]

const MobileMenu = () => {
    const { mobileMenu, closeMobileM } = useModal();
    const { openAbout } = useModal();
    const router = useRouter();

    if ( !mobileMenu ) return null;


    const navHome = () => {
        router.push("/");
        closeMobileM();
    }
    return(
        <div className={styles.modal} onClick={closeMobileM}>
            <div className={styles.modalBox} onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
            <span className={styles.title}>
                Ucha's Furniture
            </span>
            <X className={styles.exit} onClick={closeMobileM}/>
                <ul>    
                    {
                        menuList.map((item,i) => (
                            <div className={styles.menuItems}
                            key={i}
                            onClick={() => {
                                if(item.title === "Home") {
                                    navHome()
                                }else if(item.title === "About") {
                                    openAbout();
                                    closeMobileM();
                                }
                            }}
                            >
                              {item.icon}  {item.title} 
                            </div>
                        ))
                    }
                </ul>
                <div className={styles.socialMedia}>
                    <Github size={30} className={styles.socialIcons} 
                    onClick={() => {window.open("https://github.com/dachi6969/nowtryme", "_blank")}}/>

                    <Instagram size={30} className={styles.socialIcons} 
                    onClick={() => {window.open("https://Instagram.com/", "_blank")}}
                    />

                    <Facebook size={30} className={styles.socialIcons} 
                    onClick={() => {window.open("https://Facebook.com/", "_blank")}}
                    />
                </div>
            </div>
        </div>
    )
}


export default MobileMenu;