"use client"

import Advert from "./components/advertisement/Advert";
import Button from "./components/button/Button";
import Categories from "./components/categories/Categories";
import FirstContent from "./components/firstContent/FirstContent";
import DeskMenu from "./components/header/desktopMenu/DeskMenu";
import SecondContent from "./components/SecondContent/SecondContent";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.firstContent}>
        <FirstContent />
      </div>
      <Categories />
      <div className={styles.secondCont}>
        <SecondContent />
      </div>
        <Advert />
    </div>
  );
}
