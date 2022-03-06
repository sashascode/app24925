import React from "react";
import {useState} from "react";
import './_ItemCount.scss';

const ItemCount = ({cart = false, stock, initial, onAdd}) => {

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
      <div className="counter">
        <button className="boton--secundario" onClick={decrement}>-</button>
        <label>{count}</label>
        <button className="boton--secundario" onClick={increment}>+</button>
      </div>
      
      {!cart ? <button className="boton boton--primario" onClick={() => onAdd(count)}>Agregar al carrito</button> : null}
    </>
  );

}

export default ItemCount;
