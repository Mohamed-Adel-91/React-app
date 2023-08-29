// import { MouseEvent } from "react";
function ListGroup() {
    let items = ["NewYork", "London", "Paris", "Tokyo"];
    let selectedIndex = 0;
    // Event Handler
    // const handelClick = (event: MouseEvent) => console.log(event);
    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No Items Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => { selectedIndex = index;}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
