import { MouseEvent } from "react";
function ListGroup() {
    // eslint-disable-next-line prefer-const
    let items = ["NewYork", "London", "Paris", "Tokyo"];
    // ===>>> line no.5 + no.14 or no.6to8 + no.15 or no.12 === no.13
    // const Message = items.length === 0 ? <p>No Items found</p> : null;
    // const getMessage = () => {
    //     return items.length === 0 ? <p>No Items found</p> : null;
    // };
    // Event Handler
    const handelClick = (event: MouseEvent) => console.log(event);
    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No Items Found</p>}
            {/* {items.length === 0 ? <p>No Items found</p> : null} */}
            {/* {Message} */}
            {/* {getMessage()} */}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
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
