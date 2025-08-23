"use client"

import Footer from "./footer/Footer";
import Header from "./header/Header";

type categoryLayout = {
    children?: React.ReactNode;
}

export default function categoryLayout ({children}: categoryLayout) {
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}