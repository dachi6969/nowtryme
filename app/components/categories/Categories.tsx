
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
                {items.map((item,index) => (

                        <div className={styles.itemWrapper} key={index}>
                            <img src={item.img} alt={item.alt} className={styles.items}/>
                            <span>
                                {item.title}
                            </span>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Categories;