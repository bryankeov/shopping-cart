import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <h1>Pokemart</h1>
      <p>Buy all your pokemon needs here!</p>
      <ul>
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/shop"}>
          <li>SHOP</li>
        </Link>
      </ul>
    </div>
  )
}