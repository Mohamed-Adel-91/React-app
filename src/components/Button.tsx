interface Props {
    children: React.ReactNode;
    color?: string;
    onClickButton: () => void;
}

const Button = ({ children, onClickButton, color = "success" }: Props) => {
    return (
        <div>
            <button
                type="button"
                className={"btn btn-" + color}
                onClick={() => {
                    onClickButton();
                }}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
