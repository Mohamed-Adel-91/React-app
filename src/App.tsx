import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";
import ListGroup2 from "./components/ListGroup2/ListGroup2";
import Button from "./components/Button/Button";
import { useState } from "react";
import "./App.css";
let items = ["NewYork", "London", "Paris", "Tokyo"];
const handleSelectedItems = (item: string) => {
    console.log(item);
};

function App() {
    const [alertVisible, setAlertVisible] = useState(false);
    return (
        <div>
            {alertVisible && (
                <Alert onClose={() => setAlertVisible(false)}>
                    This is an <span>alert</span> box!
                </Alert>
            )}
            <br />
            <Button color="primary" onClick={() => setAlertVisible(true)}>
                Button test
            </Button>
            <br />
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItems={handleSelectedItems}
            />
            <br />
            <ListGroup2
                items={items}
                heading={"Cities Group 2"}
                onSelectItems={handleSelectedItems}
            ></ListGroup2>
            <br />
        </div>
    );
}

export default App;
