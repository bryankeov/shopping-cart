import {useState} from "react";

export default function Ball(props) {
  const [qty, setQty] = useState(1);
  
  return (
    <div className="pbCard">
      <img
        src={props.img}
        alt={props.name}
      />
      <div>
        <p>{props.name}</p>
        <p>${props.cost}</p>
      </div>
      <div className="inputs-container">
        <input onChange={(e) => setQty(e.target.value)} type="number" className='input'></input>
        <button 
        onClick={() => props.onAdd({
          ...props.pokeball,
          qty
        })}>Add to Cart</button>
      </div>
    </div>
  )
}