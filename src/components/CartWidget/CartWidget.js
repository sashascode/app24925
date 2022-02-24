import './_CartWidget.scss';
import { FiShoppingCart}  from 'react-icons/fi';
import Context from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {cart} = useContext(Context);

    return(
        <button className='cart'><FiShoppingCart/> <span className='cart-number'><p>{cart.length}</p></span>  </button> //{cart.length > 0 && cart.length} , className={cart.lenght ? 'cart-number' : 'display-none}
    )
} 

export default CartWidget;