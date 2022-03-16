import {useState} from "react";
import './_ItemCount.scss';
import { useCartContext } from "../../context/CartContext";

const ItemCount = ({cart = false, stock, initial, onAdd, productId}) => {
  const {decrementAmount, incrementAmount} = useCartContext();
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if(count > 1){
      setCount(count - 1);
      if(cart){
        decrementAmount(productId);
      }
    }
  }

  const increment = () => {
    if(count < stock){
      setCount(count + 1);
      if(cart){
        incrementAmount(productId);
      }
    }
  }

  return(
    <>
      <div className="counter">
        <button className="boton--secundario" onClick={() => decrement()}>-</button>
        <label>{count}</label>
        <button className="boton--secundario" onClick={() => increment()}>+</button>
      </div>
      
      {!cart && <button className="boton boton--primario" onClick={() => onAdd(count)}>Agregar al carrito</button>}
    </>
  );

}

export default ItemCount;
