function ListGroup() {
    let items = ["NewYork", "London", "Paris", "Tokyo"];
    items = [];
    // const Message = items.length === 0 ? <p>No Items found</p> : null;
    // const getMessage = () => {
    //     return items.length === 0 ? <p>No Items found</p> : null;
    // };
    return (
        <>
            <h1>List</h1>
            {/* {items.length === 0 ? <p>No Items found</p> : null} */}
            {items.length === 0 && <p>No Items Found</p>}
            {/* {Message} */}
            {/* {getMessage()} */}
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
