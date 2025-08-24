"use client"

import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import ProductCards from "./cards/Cards";
import { motion } from "framer-motion";

const categories = [
    'Armchair',
    'Lighting',
    'Night table',
    'Bookshelf',
    'Table',
    'Sofa'
]

export default function Products () {
    const params = useParams();
    const route = useRouter();
    const category = decodeURIComponent(params.category as string)
    const categoryRoute = (current: string) => {
        route.push(`/products/${current}`)
    }
    return(
        <div className={styles.main}>
            <div className={styles.titleDiv}>
                {category} Collection
                <span>
                    Discover new standards of comfort with our furniture.
                </span>
            </div>  
                <motion.div 
                className={styles.menuWrapper}
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                transition={{duration: 0.3, ease: "easeIn"}}   
                >
                    {categories.map((item: string,index: number) => (
                        <div key={index} className={styles.menuItem} onClick={() => categoryRoute(item)}>
                            {item}
                        </div>
                    ))}
                </motion.div>
            <ProductCards category={category}/> 

        </div>
    )
}