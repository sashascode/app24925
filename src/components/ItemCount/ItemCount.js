import React from "react";
import {useState} from "react";
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrement = () => {

    if(count > 1){
      setCount(count - 1);

    }
  }

  const increment = () => {
    if(count < stock){
      setCount(count + 1);
    }
    
  }

  return(
    <>
    <div className="counter-button">
    <button className="boton boton--secundario" onClick={decrement}>-</button>
    <label>{count}</label>
    <button className="boton boton--secundario" onClick={increment}>+</button>
    </div>
    
    <button className="boton boton--primario" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );

}

export default ItemCount;
