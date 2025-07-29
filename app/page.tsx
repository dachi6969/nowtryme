"use client"

import { ArrowUp } from "lucide-react";
import Advert from "./components/advertisement/Advert";
import Button from "./components/button/Button";
import Categories from "./components/categories/Categories";
import FirstContent from "./components/firstContent/FirstContent";
import SecondContent from "./components/SecondContent/SecondContent";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [arrowHide,setArrowHide] = useState<boolean>(false);

  const scrollUp = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
  useEffect(() => {
    window.addEventListener("scroll", () =>{
      if(window.scrollY > window.innerHeight) {
        setArrowHide(true)
      }else{
        setArrowHide(false)
      }
    })
  },[])
  return (
    <div className={styles.mainWrapper}
    >
      <div className={styles.firstContent}>
        <FirstContent />
      </div>
      <Categories />
      <div className={styles.secondCont}>
        <SecondContent />
      </div>
        <Advert />

        {/* scroll up arrow  */}
        {arrowHide && <ArrowUp size={40} className={styles.uparrow} onClick={scrollUp}/>}
    </div>
  );
}
