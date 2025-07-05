
import styles from "./Button.module.css";

type Button = {
    children?: React.ReactNode;
    variant?: "text" | "outlined" | "filled";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
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

const Button = ({children,variant,size,onClick}:Button) => {

    const varianting = variant ? variants[variant] : "text";
    const sizing = size ? sizes[size] : sizes["medium"];

    return(
        <button className={styles[varianting]} onClick={onClick}
        style={{
            padding: sizing,
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "17px"
        }}
        >
            {children}
        </button>
    )
}

export default Button;