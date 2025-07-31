
import { motion } from "framer-motion";
import styles from "./Categories.module.css";

const items = [
    {
        img: "/teste.png",
        alt: "armchair photo",
        title: "Armchair"
    },
    {
        img: "/testerrr.png",
        alt: "Night table photo",
        title: "Night table"
    },
    {
        img: "/testerr.png",
        alt: "Lighting photo",
        title: "Lighting"
    },
    {
        img: "/testerrrr.png",
        alt: "Bookshelf photo",
        title: "Bookshelf"
    },

]

const Categories = () => {
    
    return(
        <div className={styles.wrapper}  >
            <div className={styles.title}>
                <h1>Categories </h1>
                <h4>Check everything we offering to you !</h4>
            </div>

            <div className={styles.categories}>
                {items.map((item,index) => (

                        <motion.div className={styles.itemWrapper} key={index}
                        initial={{translateX: -100}}
                        whileInView={{translateX: 0}}
                        transition={{duration: 0.4}}
                        viewport={{once: true, amount: 0.3}}
                        >
                            <img src={item.img} alt={item.alt} className={styles.items}
                            />
                            <span className={styles.itemTitle}>
                                {item.title}
                            </span>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;