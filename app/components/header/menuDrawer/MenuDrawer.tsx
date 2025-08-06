"use client"
import { useModal } from "@/app/store/useMenuStore";
import styles from "./MenuDrawer.module.css";
import { motion } from "framer-motion";


const animAbout = {
    hidden:{ opacity: 0, },
    visible:{ opacity: 1, }
}

const MenuDrawer = () => {
    const {aboutState,closeAbout} = useModal();

    if(!aboutState) return null;

    return(
        <div className={styles.modal} onClick={closeAbout}>
            <div className={styles.box} onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>

            <motion.div className={styles.description}
            variants={animAbout}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2>
                    About Ucha's Furniture*
                </h2>
                <motion.span
                >
                    Welcome to Ucha's Furniture — where craftsmanship meets comfort.
                    At Ucha's, we believe your home deserves more than just furniture — it deserves pieces that reflect your lifestyle, values, and sense of beauty. That's why every item in our collection is thoughtfully chosen or skillfully handcrafted with care, combining timeless style with lasting quality. From cozy corners to statement pieces, we aim to bring warmth, elegance, and functionality into your everyday spaces — so your home not only looks good, but feels like you.
                </motion.span>
            </motion.div>
                <button className={styles.exit} onClick={closeAbout}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default MenuDrawer;
