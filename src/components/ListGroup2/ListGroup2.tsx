import { useState } from "react";
import "./ListGroup2.css";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 15px;
`;

const ListItems = styled.li`
    font-size: 50px;
    padding: 5px 0;
`;

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItems: (item: string) => void;
}
function ListGroup2(props: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{props.heading}</h1>
            {props.items.length === 0 && <p>No Items Found</p>}
            <List>
                {props.items.map((item, index) => (
                    <ListItems
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            props.onSelectItems(item);
                        }}
                    >
                        {item}
                    </ListItems>
                ))}
            </List>
        </>
    );
}

export default ListGroup2;
