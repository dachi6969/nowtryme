"use client"

import { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import axios from "axios";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/app/store/useCart";

type PathnameProps = {
    category?: string;
}
type Products = {
    img: string;
    title: string;
    category?: string;
    price: string;
}

const ProductCards = ({category}: PathnameProps) => {
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cartItems, addToCart } = useCart();
    const [addMessage,setAddMessage] = useState<boolean>(false);
    
    useEffect(() => {
        if (!category) return;

        async function fetchProducts() {
          setLoading(true);
          try {
            const result = await axios.get(`https://uchas-furniture-backend.onrender.com/products/${category}`);
            setProducts(result.data); 
          } catch (error) {
            console.error("Error fetching products:", error);
          } finally {
            setLoading(false);
          }
        }

        fetchProducts();
    }, [category]);

    useEffect(() => {
        if (!addMessage) return;
       const timer =  setTimeout(() => {
            setAddMessage(false)
        },2000)
        return () => clearTimeout(timer)
    },[addMessage])
    console.log(addMessage)
    
    return(
        <div className={styles.cardWrap}>
            {loading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.spinner}></div>
                </div>
            )}

            {!loading && products.length === 0 && (
                <div className={styles.empty}>No products found.</div>
            )}

            {!loading && products.map((item: Products,index) => (
                <motion.div 
                    className={styles.card} 
                    key={index}
                    initial={{  opacity: 0 }}
                    whileInView={{  opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn", delay: index*0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image src={item.img} alt={item.title} width={350} height={400} className={styles.image}/>
                    <span>{item.title}</span>
                    <span style={{color: "orange"}}>{item.price}$</span>
                    <div className={styles.iconWrap}>
                        <ShoppingCart 
                        size={25} 
                        className={styles.shopCart} 
                        onClick={() => {
                            addToCart(item)
                            setAddMessage(true)
                        }}/> 
                        <Search size={25} className={styles.search} />
                    </div>
                </motion.div> 
            ))}
            {addMessage && 
            <motion.div className={styles.addDiv}
            initial={{ y: 100, opacity: 0}}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            >
                Added to cart
            </motion.div>}
        </div>
    )
}

export default ProductCards;
