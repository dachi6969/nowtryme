"use client"

import styles from "./Footer.module.css";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";

const products = [
    'Armchair',
    'Lighting',
    'Night table',
    'Bookshelf',
    'Table',
    'Sofa'
]

const Footer = () => {
    const gitLog = () => {
        window.open('https://github.com/dachi6969', '_blank');
    }
    const instagramLog = () => {
        window.open('https://instagram.com', '_blank');
    }
    return(
        <footer className={styles.footer}>
            
            <div id="contacts" className={styles.contactDiv}>
                <span className={styles.contactTitle}>
                    Contacts
                </span>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <span>Number: +995-555-55-55-55</span>
                    <span>Instagram: @Ucha's Furniture</span>
                    <span>Github: @dachi6969</span>
                </div>
                <div style={{alignSelf: 'end', display: 'flex', gap: '5px'}}>
                    <Github size={28} onClick={gitLog} style={{cursor: 'pointer'}}/>
                    <Instagram size={28} onClick={instagramLog} style={{cursor: 'pointer'}}/>
                </div>
            </div>
            <div className={styles.productsDiv}>
                <span className={styles.productsTitle}>
                    Products
                </span>
                <div style={{display: 'flex', gap: '10px', fontSize: '20px', flexWrap: 'wrap', width: '70%'}}>
                {
                    products.map((item: string, i: number) => (
                        <Link href={`/products/${item}`} key={i}>
                            {item} | 
                        </Link>
                    ))
                }
                </div>
            </div>
            <div className={styles.locationDiv}>
                <span className={styles.locationTitle}>
                    Location
                </span>
            <iframe
                src="https://www.google.com/maps?q=41.7010,44.7930&z=16&output=embed"
                width="280"
                height="250"
                style={{ border: 0, alignSelf: 'center' }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>

        </footer>
    )
}


export default Footer;