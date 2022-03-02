import './_CartWidget.scss';
import { FiShoppingCart}  from 'react-icons/fi';
import Context from '../../context/CartContext';
import { useContext} from 'react';
import {Link} from 'react-router-dom';

const CartWidget = () => {
    const {cart, getQuantity} = useContext(Context);

    return(
        <Link to='/cart'><button className='cart--icon'><FiShoppingCart/> {cart.length ? <span className='cart--icon__number'><p>{getQuantity()}</p></span> : null}  </button></Link> 
    )
} 

export default CartWidget;