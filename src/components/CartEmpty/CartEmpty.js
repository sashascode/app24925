import './CartEmpty.scss';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className='empty container'>
        <img src='./img/empty-cart.png' alt='empty cart'></img>
        <h2 className='empty__title'>No hay productos en el carrito</h2>
        <p>Por favor agrega algo a tu carrito</p>
        <Link to={'/'}><button className='boton boton--primario'>Seguir comprando</button></Link>
    </div>
  );
};

export default CartEmpty;