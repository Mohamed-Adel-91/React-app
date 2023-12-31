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
import ExpandableText from "./components/ExpandableText";
import FormUseRef from "./components/FormUseRef";
import FormUseState from "./components/FormUseState";
import ReactHookForm from "./components/ReactHookForm";
import FormZod from "./components/FormZod";

let items = ["NewYork", "London", "Paris", "Tokyo"];
const handleSelectedItems = (item: string) => {
    console.log(item);
};

function App() {
    // boolean useState
    const [alertVisible, setAlertVisible] = useState(false);
    // const [isApproved, setApproved] = useState(true);

    // Handle event for useState
    let count = 0;
    const handleClick = () => {
        setAlertVisible(true);
        count++;
        console.log(alertVisible);
        console.log(count);
    };
    //************************************************************************** */
    // string useState
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const fullName = firstName + ' ' + lastName;
    //************************************************************************** */
    // object useState
    // const [person, setPerson]  = useState({
    //     firstName : '',
    //     lastName : '',
    // })
    //************************************************************************** */
    // Nested object useState
    const [drink, setDrink] = useState({
        title: "Americano",
        adds: {
            kind: "Milk",
            Qnt: 150,
        },
        price: 5,
    });
    const handlePrice = () => {
        setDrink({ ...drink, price: 6 });
    };
    const handleQnt = () => {
        setDrink({ ...drink, adds: { ...drink.adds, Qnt: 170 } });
    };
    //************************************************************************** */
    // array useState
    const [tags, setTags] = useState(["Happy", "Cheerful"]);

    const handleTags = () => {
        // Add to Array
        setTags([...tags, "something now was added"]);

        // Remove
        setTags(tags.filter((tag) => tag !== "Happy"));

        // Update
        setTags(tags.map((tag) => (tag === "Happy" ? "Happiness" : tag)));

        console.log(tags);
    };
    //************************************************************************** */
    // array of object useState
    const [bugs, setBugs] = useState([
        { id: 1, title: "Bug 1", fixed: false },
        { id: 2, title: "Bug 2", fixed: false },
    ]);
    const handleBugs = () => {
        // setBugs(
        //     bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))
        // );
        // console.log(bugs);
        //********************************** */
        // handle with immer
        setBugs(
            produce((draft) => {
                const bug = draft.find((bug) => bug.id === 1);
                if (bug) bug.fixed = true;
            })
        );
    };
    //************************************************************************** */
    // Handle sharing state between component
    const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
    //************************************************************************** */
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
    //************************************************************************** */
    // Ex2 on useState
    const [pizza, setPizza] = useState({
        name: "spicy Pepperoni",
        topping: ["Mushroom"],
    });
    const handlePizza = () => {
        setPizza({ ...pizza, topping: [...pizza.topping, "Cheese"] });
        console.log(pizza);
    };
    //************************************************************************** */
    // Ex3 on useState
    const [cart, setCart] = useState({
        discount: 0.1,
        items: [
            { id: 1, title: "P1", quantity: 1 },
            { id: 2, title: "P2", quantity: 1 },
        ],
    });
    const handleCart = () => {
        setCart({
            ...cart,
            items: cart.items.map((item) =>
                item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
            ),
        });
        console.log(cart);
    };

    return (
        <>
            <h2>FormZod</h2>
            <FormZod />
            <h2>ReactHookForm</h2>
            <ReactHookForm />
            <h2>FormUseState</h2>
            <FormUseState />
            <h2>FormUseRef</h2>
            <FormUseRef />
            <div>
                <button onClick={handleCart} className="btn btn-primary">
                    cart
                </button>
                <br />
                <button onClick={handlePizza} className="btn btn-primary">
                    pizza
                </button>
                <br />
                <button onClick={handleGame} className="btn btn-primary">
                    game
                </button>
                <br />
                <NavBar cartItemsCount={cartItems.length} />
                <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
                <br />
                {bugs.map((bug) => (
                    <p key={bug.id}>
                        {bug.title} {bug.fixed ? "Fixed" : "New"}
                    </p>
                ))}
                <button onClick={handleBugs} className="btn btn-primary">
                    fix bugs
                </button>
                <br />
                {tags.length}
                <button onClick={handleTags} className="btn btn-primary">
                    tags
                </button>
                <br />
                {drink.adds.Qnt}
                <button onClick={handleQnt} className="btn btn-primary">
                    Qnt
                </button>
                <br />
                {drink.price}
                <button onClick={handlePrice} className="btn btn-primary">
                    price
                </button>
                <br />
                <button onClick={handleClick} className="btn btn-primary">
                    Show
                </button>
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
            <div>
                <ExpandableText>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate esse perferendis enim corrupti! Architecto velit
                    sed dolore. Odit a eum expedita nisi, culpa earum quae
                    laboriosam quos, molestiae beatae maiores doloremque soluta
                    delectus placeat architecto praesentium pariatur atque. Et,
                    itaque repudiandae. Accusamus laudantium iusto ut, cum iste
                    earum aspernatur quas facere quo, non nostrum ea asperiores
                    natus ratione. Quibusdam quod minima, voluptatibus laborum
                    corporis error repellendus explicabo commodi dolor et,
                    impedit repudiandae, asperiores exercitationem illum quas ad
                    adipisci expedita consequatur nihil? Autem minus, quisquam
                    nihil quia dolorum fugit temporibus error officiis qui nisi
                    aspernatur doloremque, esse quos libero sed nulla.
                </ExpandableText>
            </div>
        </>
    );
}

export default App;
