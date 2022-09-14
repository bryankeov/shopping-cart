import {useState} from "react";

export default function Cart(props) {


  return (
    <div className="cart-container">
      <h3>Cart</h3>
      {props.items.map((i) => (
        <div key={i.name}>
          {i.name} <br/>
          qty: {i.qty} <br/>
          cost: {i.cost}
          {/* <div>
            <button type="button" onClick={() => props.handleIncrease(i)}>+</button>
            <button type="button" onClick={() => props.handleDecrease(i)}>-</button>
          </div> */}
        </div>
      ))}
      <div className="total">Total: {props.total}</div>
    </div>
  )
}