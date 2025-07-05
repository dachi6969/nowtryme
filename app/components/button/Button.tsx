
import { CSSProperties } from "react";
import styles from "./Button.module.css";

type Button = {
    children?: React.ReactNode;
    variant?: "text" | "outlined" | "filled";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    style?: CSSProperties;
}

const variants = {
    text: 'text',
    outlined: 'outlined',
    filled: 'filled',
}
const sizes = {
    small: "10px 20px",
    medium: "12px 28px",
    large: "14px 34px",
}

const Button = ({
    children,
    variant = "text",
    size = "medium",
    onClick,
    style
}:Button) => {

    return(
        <button className={styles[variant]} onClick={onClick}
        style={{
            padding: sizes[size],
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "17px",
            ...style
        }}
        >
            {children}
        </button>
    )
}

export default Button;