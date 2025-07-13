"use client"

import SecondCards from "./cards/SecondCards";
import styles from "./SecondContent.module.css";

const SecondContent = () => {
    return(
        <div className={styles.mainDiv}>   
            <h1>
                Ready to take part in creating your own furniture?
            </h1>
            <SecondCards />
        </div>
    )
}


export default SecondContent;