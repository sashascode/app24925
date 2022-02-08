import './CartWidget.css';
import { FiShoppingCart}  from 'react-icons/fi';

const CartWidget = ({colorText}) => {
    return(
    <button className='cart' style={{color: colorText}}><FiShoppingCart/> 3 </button>
    )
} 

export default CartWidget;