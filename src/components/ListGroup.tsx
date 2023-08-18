import { MouseEvent } from "react";
function ListGroup() {
    // eslint-disable-next-line prefer-const
    let items = ["NewYork", "London", "Paris", "Tokyo"];

    // Event Handler
    const handelClick = (event: MouseEvent) => console.log(event);
    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No Items Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item active"
                        key={item}
                        onClick={handelClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
