
import styles from "./Advert.module.css";

const Advert = () => {
    return(
        <div className={styles.advertImg}>  
            <img src={"/additiomal.jpg"} alt="additional advert" className={styles.img}/>
            <div className={styles.titles}>
                <h1>Feel the difference in every detail.</h1>
                <span className={styles.adverTxt}>
                    Our furniture is designed to do more than just look good — it's made to bring lasting comfort, style, and purpose to your space. From the choice of honest materials to the thoughtful craftsmanship, every piece is built to be lived in and loved for years. Whether it’s your first piece or your favorite one, it’s always worth the space it takes and the story it adds to your home.
                </span>
            </div>
        </div>
    )
}


export default Advert;