"use client"
import { useModal } from "@/app/store/useMenuStore";
import styles from "./MenuDrawer.module.css";


const MenuDrawer = () => {
    const {aboutState,closeAbout} = useModal();

    if(!aboutState) return null;

    return(
        <div className={styles.modal} onClick={closeAbout}>
            <div className={styles.box} onClick={(e:any) => e.stopPropagation()}>

            <div className={styles.description}>
                <h2>
                    About Ucha's Furniture*
                </h2>
                <span>
                Welcome to Ucha's Furniture — where craftsmanship meets comfort.
                At Ucha's, we believe your home deserves furniture that's both stylish
                and built to last. Every piece in our collection is carefully selected or
                handcrafted to bring warmth, elegance, and functionality into your living spaces.
                </span>
            </div>
                <button className={styles.exit} onClick={closeAbout}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default MenuDrawer;
