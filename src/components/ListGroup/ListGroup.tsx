import { useState } from "react";
import styles from "./ListGroup.module.css";
import { BsFillCalendarDateFill } from "react-icons/bs";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItems: (item: string) => void;
}
function ListGroup(props: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <BsFillCalendarDateFill color="#0d6efd" size="40" />
            <h1>{props.heading}</h1>
            {props.items.length === 0 && <p>No Items Found</p>}
            <ul className={[styles["list-group"], styles.container].join(" ")}>
                {props.items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            props.onSelectItems(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
