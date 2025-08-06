"use client"

import { useState } from "react";
import styles from "./page.module.css"
import { CircleFadingArrowUp, CirclePause } from "lucide-react";

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

const AI_Page = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputMove,setInputMove] = useState(styles.off)
    
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

    return(
        <div className={styles.main}>
            <div className={styles.chat}>
              {messages.length === 0 && 
              <div className={styles.title}>
                How can I help you?
              </div>}
            {messages.map((msg, i) => (
            <div key={i} className={msg.role === 'user' ? styles.userMsg : styles.assistantMsg}>
            {msg.content}
            </div>
            ))}
            {loading && <div className={styles.assistantMsg}>Typing...</div>}
            </div>
            <div className={`${styles.handlers} ${inputMove}`}>
                <input 
                value={input}
                onChange={inputBind}
                onKeyDown={handleKey}
                type="text" 
                placeholder="Ask to Gpt..." 
                className={styles.inputing}
                />
               {loading ? 
                <CirclePause size={40}/>: 
                <CircleFadingArrowUp 
                className={styles.buttoning} 
                size={40} 
                onClick={sendMessage}
                />}
            </div>
        </div>
    )
}

export default AI_Page