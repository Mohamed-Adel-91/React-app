import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";
import ListGroup2 from "./components/ListGroup2/ListGroup2";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import { useState } from "react";
import produce from "immer";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

let items = ["NewYork", "London", "Paris", "Tokyo"];
const handleSelectedItems = (item: string) => {
    console.log(item);
};

function App() {
    // boolean useState
    const [alertVisible, setAlertVisible] = useState(false);
    // const [isApproved, setApproved] = useState(true);

    // string useState
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const fullName = firstName + ' ' + lastName;

    // object useState
    // const [person, setPerson]  = useState({
    //     firstName : '',
    //     lastName : '',
    // })

    // Nested object useState
    const [drink, setDrink] = useState({
        title: "Americano",
        adds: {
            kind: "Milk",
            Qnt: 150,
        },
        price: 5,
    });

    // array useState
    const [tags, setTags] = useState(["Happy", "Cheerful"]);

    // array of object useState
    const [bugs, setBugs] = useState([
        { id: 1, title: "Bug 1", fixed: false },
        { id: 2, title: "Bug 2", fixed: false },
    ]);

    // Handle event for useState
    let count = 0;
    const handleClick = () => {
        setAlertVisible(true);
        count++;
        console.log(alertVisible);
        console.log(count);
    };

    const handlePrice = () => {
        setDrink({ ...drink, price: 6 });
    };

    const handleQnt = () => {
        setDrink({ ...drink, adds: { ...drink.adds, Qnt: 170 } });
    };

    const handleTags = () => {
        // Add to Array
        setTags([...tags, "something now was added"]);

        // Remove
        setTags(tags.filter((tag) => tag !== "Happy"));

        // Update
        setTags(tags.map((tag) => (tag === "Happy" ? "Happiness" : tag)));

        console.log(tags);
    };

    const handleBugs = () => {
        // setBugs(
        //     bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))
        // );
        // console.log(bugs);

        // handle with immer
        setBugs(
            produce((draft) => {
                const bug = draft.find((bug) => bug.id === 1);
                if (bug) bug.fixed = true;
            })
        );
    };

    // Handle sharing state between component
    const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

    // Ex1 on useState
    const [game, setGame] = useState({
        id: 1,
        player: {
            names: "John",
        },
    });
    const handleGame = () => {
        setGame({ ...game, player: { ...game.player, names: "pop" } });
        console.log(game);
    };
    return (
        <div>
            <button onClick={handleGame}>game</button>
            <br />
            <NavBar cartItemsCount={cartItems.length} />
            <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
            <br />
            {bugs.map((bug) => (
                <p key={bug.id}>
                    {bug.title} {bug.fixed ? "Fixed" : "New"}
                </p>
            ))}
            <button onClick={handleBugs}>fix bugs</button>
            <br />
            {tags.length}
            <button onClick={handleTags}>tags</button>
            <br />
            {drink.adds.Qnt}
            <button onClick={handleQnt}>Qnt</button>
            <br />
            {drink.price}
            <button onClick={handlePrice}>price</button>
            <br />
            <button onClick={handleClick}>Show</button>
            <br />
            {alertVisible && (
                <Alert onClose={() => setAlertVisible(false)}>
                    This is an <span>alert</span> box!
                </Alert>
            )}
            <br />
            {/* {fullName} */}
            <Button color="primary" onClick={() => setAlertVisible(true)}>
                Button test
            </Button>
            <br />
            <Like onClick={() => console.log("Like Clicked")} />
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
