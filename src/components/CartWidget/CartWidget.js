import './_CartWidget.scss';
import { FiShoppingCart}  from 'react-icons/fi';

const CartWidget = () => {
    return(
        <button className='cart'><FiShoppingCart/> 3 </button>
    )
} 

export default CartWidget;