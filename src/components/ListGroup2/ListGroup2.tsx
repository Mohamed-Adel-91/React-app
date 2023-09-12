import { useState } from "react";
import "./ListGroup2.css";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 15px;
`;

interface ListItemsProps {
    active: boolean;
}

const ListItems = styled.li<ListItemsProps>`
    font-size: 20px;
    padding: 5px 0;
    background: ${(props) => (props.active ? "#0d6efd" : "none")};
`;

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItems: (item: string) => void;
}

function ListGroup2({ items, heading, onSelectItems }: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No Items Found</p>}
            <List>
                {items.map((item, index) => (
                    <ListItems
                        active={index === selectedIndex}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItems(item);
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
