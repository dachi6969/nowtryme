
import styles from "./Categories.module.css";
import { useRouter } from "next/navigation";

const items = [
    {
        img: "/armchair8.jpg",
        alt: "armchair photo",
        title: "Armchair"
    },
    {
        img: "/night table1.jpg",
        alt: "Night table photo",
        title: "Night table"
    },
    {
        img: "/lighting2.jpg",
        alt: "Lighting photo",
        title: "Lighting"
    },
    {
        img: "/bookshelf2.jpg",
        alt: "Bookshelf photo",
        title: "Bookshelf"
    },

]

const Categories = () => {
    const currentRoute = useRouter();
    
    return(
        <div className={styles.wrapper}  >
            <div className={styles.title}>
                <h1>Categories </h1>
                <h4>Check everything we offering to you !</h4>
            </div>

            <div className={styles.categories}>
                {items.map((item,index) => (

                        <div className={styles.itemWrapper} key={index}>
                            <img src={item.img} alt={item.alt} className={styles.items}
                            onClick={() => {currentRoute.push(`/products/${item.title}`)}}
                            />
                            <span className={styles.itemTitle}>
                                {item.title}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;