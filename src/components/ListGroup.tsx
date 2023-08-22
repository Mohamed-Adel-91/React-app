import { MouseEvent } from "react";
function ListGroup() {
    let items = ["NewYork", "London", "Paris", "Tokyo"];
    let selectedIndex = -1;
    // Event Handler
    const handelClick = (event: MouseEvent) => console.log(event);
    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No Items Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active'}
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
