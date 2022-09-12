import React from "react";
import Nav from "./components/Nav";
import Pokeballs from "./assets/Assets.js";

export default function Home() {

  let {pokeballs, setPokeballs} = useState()

  return (
    <div>
      <Nav/>
      <h1>Home</h1>
    </div>
  )
}