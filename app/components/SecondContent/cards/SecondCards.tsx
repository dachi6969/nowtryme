
import styles from "./SecondCards.module.css";


const SecondCards = () => {
    return(
        <>
            {/* first card  */}
        <div className={styles.cardsWrapper}>   
            <div className={styles.card}>
                <div className={styles.imgdiv}></div>
                <div className={styles.textdiv}>
                    <h1>
                        Welcome to Ucha's Furniture!
                    </h1>
                    <h4>
                    We're so glad you stopped by. At Ucha's Furniture, we believe that your space should feel like you — warm, comfortable, and full of personality.

                    Whether you're decorating your first apartment, refreshing a single room, or turning your house into a forever home, we've got something made just for you. From cozy corners to statement pieces, every item we offer is chosen with love and care.
                    </h4>
                </div>
            </div>
        </div>
            {/* second card  */}
        <div className={styles.cardsWrapper}>   
            <div className={`${styles.card} ${styles.secondcard}`}>
                <div className={styles.imgdiv} style={{backgroundImage: "url('/secondThird.jpg')"}}></div>
                <div className={styles.textdiv}>
                    <h1>
                        Quality You Can Trust
                    </h1>
                    <h4>
                    We believe that every home deserves a touch of honesty, warmth, and comfort.

                    That's why we choose materials that last, designs that feel just right, and a level of care you can see — and feel — in every single piece. From the texture of the wood to the curve of a chair, we make sure every detail brings joy to your space.

                    Because at Ucha's Furniture, it's not just about how things look — it's about how they make you feel.
                    </h4>
                </div>
            </div>
        </div>
            {/* third card  */}
        <div className={styles.cardsWrapper}>   
            <div className={styles.card}>
                <div className={styles.imgdiv} style={{backgroundImage: "url('/secondFourth.jpg')"}}></div>
                <div className={styles.textdiv}>
                    <h1>
                        Made for Real Life
                    </h1>
                    <h4>
                    Your life isn't one-size-fits-all — and your furniture shouldn't be either. That's why we focus on pieces that match your real needs: comfort, style, and everyday function.

                    Whether you're hosting guests, working from the kitchen table, or relaxing with family, we're here to help make your space feel truly yours.        
                    </h4>
                </div>
            </div>
        </div>
            {/* fourth card  */}
        <div className={styles.cardsWrapper}>   
            <div className={`${styles.card} ${styles.secondcard}`}>
                <div className={styles.imgdiv} style={{backgroundImage: "url('/secondSecond.jpg')"}}></div>
                <div className={styles.textdiv}>
                    <h1>
                        Built with Care Meant to Last
                    </h1>
                    <h4>
                    Every piece of furniture we create carries a story — one of craftsmanship, patience, and love for the details. From the first cut to the final touch, we make sure each item is strong, beautiful, and built to stay with you for years.

                    It's more than just furniture. It's something you'll live with, laugh around, and make memories on.
                    </h4>
                </div>
            </div>
        </div>
        </>
    )
}


export default SecondCards;