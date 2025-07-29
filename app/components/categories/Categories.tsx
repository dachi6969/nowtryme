
import { motion } from "framer-motion";
import styles from "./Categories.module.css";

const Categories = () => {
    return(
        <motion.div className={styles.wrapper}
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        
        >
            <div className={styles.title}>
                <h1>Categories </h1>
                <h4>Check everything we offering to you !</h4>
            </div>

            <div className={styles.categories}>
                <div className={styles.itemWrapper}>
                    <img src={"/teste.png"} alt="armchair photo" className={styles.items}/>
                    <span>
                        Armchair
                    </span>
                </div>

                <div className={styles.itemWrapper}>
                    <img src={"/testerrr.png"} alt="night table photo" className={styles.items}/>
                    <span>
                        Night table
                    </span>
                </div>

                <div className={styles.itemWrapper}>
                    <img src={"/testerr.png"} alt="lighting photo" className={styles.items}/>
                    <span>
                        Lighting
                    </span>
                </div>

                <div className={styles.itemWrapper}>
                    <img src={"/testerrrr.png"} alt="bookshelf photo" className={styles.items}/>
                    <span>
                        Bookshelf
                    </span>
                </div>

            </div>
        </motion.div>
    )
}

export default Categories;