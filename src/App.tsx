import ListGroup from "./components/ListGroup";
let items = ["NewYork", "London", "Paris", "Tokyo"];

function App() {
    return (
        <div>
            <ListGroup items={items} heading="Cities" />
        </div>
    );
}

export default App;
