"use client"

import { useState } from "react";
import styles from "./page.module.css"
import { CircleFadingArrowUp, CirclePause } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../store/useTheme";

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

const preQuestions = [
  "Can you help me choose the best sofa for a small living room?",
  "What's the difference between solid wood and MDF furniture?",
  "Do you have any modern-style dining tables in stock?"
]

const AI_Page = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputMove,setInputMove] = useState(styles.off);
    const {themeOn,} = useTheme();
    const light = "#E6E6E6";
    const themeChange = themeOn ? light : "black";
    const themeReverse = themeOn ? 'black' : light;
    
    const inputBind = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const sendMessage = async () => {
        if (!input.trim()) return;
        setInputMove(styles.on)
    
        const userMessage: Message = { role: 'user', content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput('');
        setLoading(true);
        try {
          const res = await fetch('/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: updatedMessages, max_tokens: 50 }),
          });
    
          const data = await res.json();
          const reply = data.choices?.[0]?.message?.content;
    
          if (reply) {
            setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
          } else {
            setMessages(prev => [...prev, { role: 'assistant', content: 'No reply from AI.' }]);
          }
        } catch (err) {
          setMessages(prev => [...prev, { role: 'assistant', content: 'Error connecting to AI.' }]);
          console.error(err);
        }
    
        setLoading(false);
      };

      const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') sendMessage();
      };
      const preQuest = (current: string) => {
        setInput(current)
      }

    return(
        <div className={styles.main}
        style={{
          backgroundColor: themeChange,
          color: themeReverse
        }}
        >
            <div className={styles.chat} style={{backgroundColor: themeChange}}>
              {messages.length === 0 && 
              <motion.div className={styles.title}
              style={{color: themeReverse}}
              initial={{opacity: 0, translateX: -100}}
              animate={{opacity: 1, translateX: 0}}
              transition={{duration: 0.5, delay: 0.5}}
              >
                How can I help you?
              </motion.div>}
            {messages.map((msg, i) => (
            <div key={i} className={msg.role === 'user' ? styles.userMsg : styles.assistantMsg}
            style={{color: light}}>
            {msg.content}
            </div>
            ))}
            {loading && <div className={styles.assistantMsg} style={{color: light}}>Typing...</div>}
            </div>
            <div className={`${styles.handlers} ${inputMove}`}>
              {messages.length === 0 && <div style={{display: "flex", gap: "20px", maxWidth: "90vw", overflowX: "auto", scrollbarWidth: "none", padding: "10px"}}>
                {preQuestions.map((item,i) => (
                  <motion.div className={styles.pre} style={{
                    backgroundColor: themeOn ? 'black' : '#6f6e6e',
                    color: light
                  }}
                  key={i}
                  initial={{opacity: 0,}}
                  animate={{opacity: 1 }}
                  transition={{duration: 2}}
                  onClick={() => preQuest(item)}
                  >
                    {item}
                  </motion.div>
                ))}
                </div>}
              <div style={{display: "flex", alignItems: "center", maxWidth: "720px", width: "90vw", gap: "10px"}}> 
                <input 
                value={input}
                onChange={inputBind}
                onKeyDown={handleKey}
                type="text" 
                placeholder="Ask to Gpt..." 
                className={styles.inputing}
                style={{
                  color: themeReverse,
                  backgroundColor: themeOn ? light : "#202123",
                  border: themeOn ? '2px solid black' : 'none'
                }}
                />
               {loading ? 
                <CirclePause size={40} />: 
                <CircleFadingArrowUp 
                className={styles.buttoning} 
                size={40} 
                onClick={sendMessage}
                color={themeReverse}
                />}
                </div>
            </div>
        </div>
    )
}

export default AI_Page