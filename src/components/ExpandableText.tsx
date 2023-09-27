import { useState } from "react";

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
    const [isExtend, setExtend] = useState(false);
    const handelExtend = () => {
        setExtend(!isExtend);
    };

    if (children.length <= maxChars) return <p>{children}</p>;

    const text = isExtend ? children : children.substring(0, maxChars);
    return (
        <>
            <p>
                {text}...
                <button onClick={handelExtend} className="btn btn-primary">
                    {isExtend ? "Less" : "More"}
                </button>
            </p>
        </>
    );
};

export default ExpandableText;
