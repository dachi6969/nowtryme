"use client"

import { ChangeEvent, useEffect, useState } from "react";
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

type Order = 'asc' | 'des' | 'default'

const ProductCards = ({ category }: PathnameProps) => {
    const [products, setProducts] = useState<Products[]>([]);
    const [prioProducts,setPrioProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState(false);
    const { addToCart } = useCart();
    const [addMessage, setAddMessage] = useState(false);
    const [priorityPrice,setPriorityPrice] = useState<Order>('default');

    const priorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPriorityPrice(e.target.value as Order)
    }
 
    useEffect(() => {
        if (!category) return;

        setProducts([]);
        setLoading(true);

        async function fetchProducts() {
            try {
                const result = await axios.get(`https://uchas-furniture-backend.onrender.com/products/${category}`);
                setProducts(result.data);
                setPrioProducts(result.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [category]);

    useEffect(() => {
        if(priorityPrice === 'default') {
            setProducts(prioProducts);
        }
        else if(priorityPrice === 'asc') {
            const res = [...prioProducts].sort((a:Products,b:Products) => Number(a.price) - Number(b.price));
            setProducts(res);
        }
        else if(priorityPrice === 'des') {
            const res = [...prioProducts].sort((a:Products,b:Products) => Number(b.price) - Number(a.price));
            setProducts(res);
        }
    },[priorityPrice,prioProducts])
    
    useEffect(() => {
        if (!addMessage) return;

        const timer = setTimeout(() => setAddMessage(false), 2000);
        return () => clearTimeout(timer);
    }, [addMessage]);
    
    return (
        <>
            <div className={styles.menu}>
            <div className={styles.selectWrapper}>
            <label htmlFor="priority">Sort by price:</label>
                <select 
                id="priority"
                name="priority"
                className={styles.selectPrice}
                value={priorityPrice} 
                onChange={priorityChange}>
                    <option>default</option>
                    <option>asc</option>
                    <option>des</option>
                </select>
            </div>
            </div>
        <div className={styles.cardWrap}>
            {loading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.spinner}></div>
                </div>
            )}

            {!loading && products.length === 0 && (
                <div className={styles.empty}>No products found.</div>
            )}

            {!loading && products.map((item, index) => (
                <motion.div
                    className={styles.card}
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn", delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image src={item.img} alt={item.title} width={350} height={400} className={styles.image} />
                    <span>{item.title}</span>
                    <span style={{ color: "orange" }}>{item.price}$</span>
                    <div className={styles.iconWrap}>
                        <ShoppingCart
                            size={25}
                            className={styles.shopCart}
                            onClick={() => {
                                addToCart(item);
                                setAddMessage(true);
                            }}
                        />
                        <Search size={25} className={styles.search} />
                    </div>
                </motion.div>
            ))}

            {addMessage && (
                <motion.div
                    className={styles.addDiv}
                    initial={{ y: 100, opacity: 0, x: "-50%" }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    Added to cart
                </motion.div>
            )}
        </div>
        </>
    );
}

export default ProductCards;
