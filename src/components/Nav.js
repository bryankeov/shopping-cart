import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h1>Pokemart</h1>
      <p>Buy all your pokemon needs here!</p>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/shop"}>
          <li>Shop</li>
        </Link>
      </ul>
    </div>
  )
}