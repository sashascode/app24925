import './_CartWidget.scss';
import { FiShoppingCart}  from 'react-icons/fi';
import { useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';

const CartWidget = () => {
    const {cart, getQuantity} = useCartContext();

    return(
        <Link to='/cart'><button className='cart--icon'><FiShoppingCart/> {cart.length ? <span className='cart--icon__number'><p>{getQuantity()}</p></span> : null}  </button></Link> 
    )
} 

export default CartWidget;