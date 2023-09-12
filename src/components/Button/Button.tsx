import styles from "./Button.module.css";

interface Props {
    children: string;
    color?: "primary" | "secondary" | "danger";
    onClickButton: () => void;
}

const Button = ({ children, onClickButton, color = "primary" }: Props) => {
    return (
        <div>
            <button
                className={[styles.btn, styles["btn-" + color]].join(" ")}
                onClick={onClickButton}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
