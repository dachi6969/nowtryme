"use client" 

import { ShoppingCart, Trash, X } from "lucide-react";
import styles from "./Cart.module.css";
import { useCart } from "@/app/store/useCart";
import Image from "next/image";
import { motion } from "framer-motion";

type Item = {
    img: string;
    price: string;
    title: string;
}


const Cart = () => {
    const {cartItems, clearCart, removeFromCart, cartOpen, openCart, closeCart} = useCart();
    return(
        <div>
            <div style={{position: "relative"}}>
            <ShoppingCart size={27} onClick={openCart} style={{cursor: "pointer"}} className={styles.icon}/>
            <div className={styles.counter}>{cartItems.length}</div>
            </div> 
            {cartOpen && 
            <motion.div className={styles.cartModal} 
            initial={{x: 600, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ duration: 0.5 }}
            >
                <span className={styles.modalTitle}>your products</span>
                {cartItems.length === 0 && 
                    <span style={{color: "grey",fontSize:"18px"}}>Cart is empty...</span>
                }
                {cartItems.length !== 0 && 
                cartItems.map((item: Item,index: number) => (
                    <div key={index} className={styles.eachProduct}>
                        <Image src={item.img} alt={item.title} height={110} width={120} style={{borderRadius: "7px"}}/>
                        <span>{item.title}</span>
                        <span className={styles.price}>{item.price}$</span>
                        <Trash className={styles.remove} color="red" size={22} onClick={() => {removeFromCart(index)}}/>
                    </div>
                ))}
            <X className={styles.exit} size={25} onClick={closeCart}/>
            {cartItems.length !== 0 && 
            <button onClick={clearCart}>
                clear
            </button>}
            </motion.div>}
        </div>
    )
}

export default Cart;