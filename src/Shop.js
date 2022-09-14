import Header from "./components/Header";
import Ball from "./components/Ball";
import React, {useState} from "react";
import pbArr from "./assets/Assets.js";
import Cart from "./components/Cart";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0)

  function getTotal() {
    let itemTotal = Number();

    items.map((i) => (
    itemTotal += Number(i.qty) * Number(i.cost)
    ));
  setTotal(itemTotal)
  }


  const handleAddItem = (pokeball) => {
    const itemIndex = items.findIndex((i) => i.name === pokeball.name);
    let newItems;

    if(itemIndex === -1) {
      newItems = [...items, pokeball];
    } else {
      newItems = [...items];
      newItems[itemIndex].qty = Number(newItems[itemIndex].qty) + Number(pokeball.qty);
      newItems[itemIndex].cost = pokeball.cost
    }
    getTotal();
    setItems(newItems);
  }

  // const handleIncrease = (pokeball) => {
  //   const itemIndex = items.findIndex((i) => i.name === pokeball.name);
  //   const newItems = [...items];
  //   newItems[itemIndex].qty = newItems[itemIndex].qty + 1;
  //   setItems(newItems);
  // }

  // const handleDecrease = (pokeball) => {
  //   const itemIndex = items.findIndex((i) => i.name === pokeball.name);
  //   const newItems = [...items];
  //   newItems[itemIndex].qty = newItems[itemIndex].qty - 1;

  //   if(newItems[itemIndex].qty <= 0) {
  //     newItems.splice(itemIndex, 1);
  //   }
  //   setItems(newItems);
  // }

  return (
    <div>
      <Header/>
      <div className="container">
      <div id="shop-container">
        {pbArr.map((pokeball) => (
          <Ball
          name={pokeball.name}
          key={pokeball.id}
          img={pokeball.img}
          cost={pokeball.cost}
          onAdd={handleAddItem}
          pokeball={pokeball}
          />
        ))}
      </div>
      <Cart
        items={items}
        total={total}
        // handleIncrease={handleIncrease}
        // handleDecrease={handleDecrease}
      />
    </div>
    </div>
  )
}