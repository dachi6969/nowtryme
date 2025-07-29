"use client"

import { useColored } from "@/app/store/useColores";
import styles from "./FirstContent.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const images = [
    {
        desktop: "/desktop1.jpg",
        mobile: "/mobile1.jpg"
    },
    {
        desktop: "/desktop2.jpg",
        mobile: "/mobile2.jpg"
    },
    {
        desktop: "/desktop3.jpg",
        mobile: "/mobile3.jpg"
    },
    {
        desktop: "/desktop4.jpg",
        mobile: "/mobile4.jpg"
    },
    {
        desktop: "/desktop5.jpg",
        mobile: "/mobile5.jpg"
    },
]

const FirstContent = () => {
    const {setScrolledTrue,setScrolledFalse} = useColored();
    const [currentImg,setCurrentImg] = useState(1);
    const [initialImg, setInitialImg] = useState<string | null>(null);
    const [arrowHide,setArrowHide] = useState<boolean>(false);
    const {ref,inView,entry} = useInView({threshold: 0.3});

    const leftArrow = () => {
        if (currentImg === 1) return
        setCurrentImg(prev => prev - 1)
    }
    const rightArrow = () => {
        if (currentImg === images.length) return setCurrentImg(1)
        setCurrentImg(prev => prev + 1)
    }
    const scroller = () => {
        window.scrollBy({top: window.innerHeight, behavior: "smooth"})
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const img = window.innerWidth > 480 ? 
            images[0].desktop : 
            images[0].mobile;
            setInitialImg(img)
        }
    },[])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {setScrolledTrue()}
            if(window.scrollY > 300) {setArrowHide(true)}
            if(window.scrollY < 300) {setArrowHide(false)}
            if(window.scrollY < 100) {setScrolledFalse()};
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      useEffect(() => {
        if (!inView) return
        const isDesktop = window.innerWidth > 480;
        setInitialImg(images[currentImg - 1][isDesktop ? "desktop" : "mobile"]);

        const timer = setTimeout(() => {
            setCurrentImg((prev) => (prev === images.length ? 1 : prev + 1));         
        },5000)
        
        return () => {
            clearTimeout(timer);
        }
      }, [currentImg,inView]);
      

    return(
        <div className={styles.imaged} 
        ref={ref}
        
        >
        {initialImg && (
            <Image 
            src={initialImg}
            alt="Furniture content" 
            fill 
            style={{objectFit: "cover"}}       
            />
        )}

            {!arrowHide && <div className={styles.switcher}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 64 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrow}
                onClick={leftArrow}
                >
                <line x1="2" y1="12" x2="63" y2="12" />
                <polyline points="12 4 2 12 12 20" />
                </svg>

                <span className={styles.numberic}>
                    {currentImg}/{images.length}
                </span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 64 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrow}
                onClick={rightArrow}
                >
                <line x1="1" y1="12" x2="62" y2="12" />
                <polyline points="52 4 62 12 52 20" />
                </svg>

            </div>}
        { images[currentImg - 1].desktop === initialImg && !arrowHide&&
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.scrollArrow}
              onClick={scroller}
            >
            <line x1="12" y1="1" x2="12" y2="62" />
            <polyline points="4 52 12 62 20 52" />
            </svg>}

        </div>
    )
}

export default FirstContent;