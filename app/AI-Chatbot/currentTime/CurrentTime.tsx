"use client"

import { useState } from "react"


export default function CurrentTime () {
    const [currTime] = useState(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
      });
    return(
        <div style={{padding: "4px", fontSize: "12px"}}>
            {currTime}
        </div>
    )
}