"use client"

import styles from "./FirstContent.module.css";
import { useImageStore } from "@/app/store/useImages";


const FirstContent = () => {
    const {contentImg,firstImg,secondImg,thirdImg} = useImageStore();
    
    let classChange = styles.imaged

    if(contentImg === "url('/second.jpg')") {
        classChange = styles.second
    } else if(contentImg === "url('/third.jpg')") {
        classChange = styles.third
    }

    return(
        <div className={classChange}
        style={{backgroundImage: contentImg}}
        >
        <div>
            <button onClick={firstImg} className={styles.switcher}>
                1
            </button>
            <button onClick={secondImg} className={styles.switcher}>
                2
            </button>
            <button onClick={thirdImg} className={styles.switcher}>
                3
            </button>
        </div>
        </div>
    )
}

export default FirstContent;