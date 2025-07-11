"use client"

import Button from "./components/button/Button";
import FirstContent from "./components/firstContent/FirstContent";
import DeskMenu from "./components/header/desktopMenu/DeskMenu";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.firstContent}>
        <FirstContent />
      </div>
    </div>
  );
}
