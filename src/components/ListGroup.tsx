import { useState } from "react";
// {items: [], heading: string}
interface ListGroupProps {
    items: string[];
    heading: string;
}
function ListGroup(props: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{props.heading}</h1>
            {props.items.length === 0 && <p>No Items Found</p>}
            <ul className="list-group">
                {props.items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
