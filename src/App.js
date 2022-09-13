import React, {useState, useEffect} from "react";
import Nav from "./components/Nav";

export default function App() {
  const {shopCart, setShopCart} = useState(0);


  return (
    <div>
      <Nav/>
      <h1>Welcome!</h1>
      <p>We pride ourselves for selling the most authentic pokeballs available.</p>
      <p>You wont find better pokeballs elsewhere.</p>
    </div>
  )
}