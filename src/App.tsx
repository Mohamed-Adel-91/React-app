import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
let items = ["NewYork", "London", "Paris", "Tokyo"];
const handleSelectedItems = (item: string) => {
    console.log(item); // [ 'NewYork', 'London' ]
};

import Button from "./components/Button";

function App() {
    return (
        <div>
            <Alert>
                This is an <span>alert</span> box!
            </Alert>
            <br />
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItems={handleSelectedItems}
            />
            <br />
            <Button
                // color="success"
                onClickButton={() => console.log("Button Clicked")}
            >
                Button test
            </Button>
            <br />
        </div>
    );
}

export default App;
