"use client"

import { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import axios from "axios";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

type PathnameProps = {
    category?: string;
}

const ProductCards = ({category}: PathnameProps) => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        if (!category) return;
        async function fetchProducts() {
          try {
            const result = await axios.get(`http://localhost:4000/products/${category}`);
            setProducts(result.data); 
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        }
        fetchProducts();
      }, [category]);
      
    return(
        <div className={styles.cardWrap}>
            {products.length !== 0 && 
            products.map((item: any,index) => (
                <motion.div 
                className={styles.card} 
                key={index}
                initial={{  opacity: 0 }}
                whileInView={{  opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn", delay: index*0.1 }} // stagger by index
                viewport={{ once: true, amount: 0.3 }}
                >
                    <Image src={item.img} alt={item.title} width={350} height={400} className={styles.image}/>
                    <span>
                        {item.title}
                    </span>
                    <span style={{color: "orange"}}>
                        {item.price}$
                    </span>
                    <div className={styles.iconWrap}>
                        <ShoppingCart size={25} className={styles.shopCart}/>
                        <Search size={25} className={styles.search}/>
                    </div>
                </motion.div> 
            ))
            }
        </div>
    )
}


export default ProductCards;