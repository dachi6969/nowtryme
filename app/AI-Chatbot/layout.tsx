"use client"

import Header from "./header/Header";

type Children = {
    children: React.ReactNode;
}

export default function ({children}: Children) {
    return(
        <div>
            <Header />
            {children}
        </div>
    )
}