import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
let items = ["NewYork", "London", "Paris", "Tokyo"];
const handleSelectedItems = (item: string) => {
    console.log(item); // [ 'NewYork', 'London' ]
};

function App() {
    return (
        <div>
            <Alert>
                This is an <span>alert</span> box!
            </Alert>
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItems={handleSelectedItems}
            />
        </div>
    );
}

export default App;
