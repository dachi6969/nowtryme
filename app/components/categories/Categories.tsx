
import { motion } from "framer-motion";
import styles from "./Categories.module.css";
import { useRouter } from "next/navigation";

const items = [
    {
        img: "/table8.jpg",
        alt: "table photo",
        title: "Table"
    },
    {
        img: "/lighting2.jpg",
        alt: "Lighting photo",
        title: "Lighting"
    },
    {
        img: "/armchair8.jpg",
        alt: "armchair photo",
        title: "Armchair"
    },
    {
        img: "/bookshelf2.jpg",
        alt: "Bookshelf photo",
        title: "Bookshelf"
    },
    {
        img: "/sofa2.jpg",
        alt: "Sofa photo",
        title: "Sofa"
    },
    {
        img: "/night table1.jpg",
        alt: "Night table photo",
        title: "Night table"
    },

]

const Categories = () => {
    const currentRoute = useRouter();
    
    return(
        <div className={styles.wrapper}  >
            <div className={styles.title}>
                <motion.h1
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                >
                    Categories
                </motion.h1>
                <motion.h4 
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                >
                    Check everything we offering to you !
                </motion.h4>
            </div>

            <div className={styles.categories}>
                {items.map((item,index) => (

                        <div className={styles.itemWrapper} key={index}>
                            <img src={item.img} alt={item.alt} className={styles.items}
                            onClick={() => {currentRoute.push(`/products/${item.title}`)}}
                            />
                            <span className={styles.itemTitle}>
                                {item.title}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;