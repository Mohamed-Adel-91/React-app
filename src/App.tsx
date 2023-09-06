import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
let items = ["NewYork", "London", "Paris", "Tokyo"];
const handleSelectedItems = (item: string) => {
    console.log(item); // [ 'NewYork', 'London' ]
};

function App() {
    const [alertVisible, setAlertVisible] = useState(false);
    return (
        <div>
            {alertVisible && <Alert onClose={()=>setAlertVisible(false)}>
                This is an <span>alert</span> box!
            </Alert>}
            <br />
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItems={handleSelectedItems}
            />
            <br />
            <Button
                color="success"
                onClickButton={() => setAlertVisible(true) }
            >
                Button test
            </Button>
            <br />
        </div>
    );
}

export default App;
