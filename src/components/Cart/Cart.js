import './Cart.scss';
import { useCartContext } from '../../context/CartContext';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartEmpty from '../CartEmpty/CartEmpty';


const Cart = () => {
    const {cart, getQuantity, getTotal, removeItem, clearCart} = useCartContext();

    if(!cart.length){
       return <CartEmpty/>
    };

    return (
        <div id='cart'>
            <div className='cart'>
                <header className='cart__header'>
                    <h1 className='cart__header--heading'>Carrito</h1>
                    <h5 onClick={() => clearCart()} className='cart__header--action'>Eliminar todo</h5>
                </header>
        
                <div className="cart__items">
                    {cart.map((product) => {
                        return(
                            <div key={product.id} className='cart__item'>
                                <div className='cart__item--img'>
                                    <img src={product.img} alt={product.name} className='cart__item--image'/>
                                </div>
                                <div className='cart__item--about'>
                                    <h1 className="cart__item--name" style={{fontSize: 25}}>{product.name}</h1>
                                    <h3 className='cart__item--detail'>{product.detail}</h3>
                                </div>
                                <div className='cart__item--counter'><ItemCount cart={true} stock={product.stock} initial={product.count} productId={product.id}/> </div>
                                <div className='cart__item--prices'>
                                    <div className='cart__item--amount'>{`$${product.price}`}</div>
                                    <div className='cart__item--trash'><span onClick={() => removeItem(product.id)}><FaRegTrashAlt/></span></div>
                                </div>   
                            </div>
                        )}
                    )}      
                </div>

                <hr/>
                    <div className='cart__checkout'> 
                        <div className='cart__total'>
                            <div>
                                <div className='cart__total--subtotal'>Sub-Total</div>
                                <div className='cart__total--items'>{`${getQuantity()} items`}</div>
                            </div>
                            <div className='cart__total--amount'>{`$${getTotal()}`}</div>
                        </div>
                        <Link to={'/order'}><button className='boton boton--primario'>Checkout</button></Link>  
                    </div> 
            </div>
        </div>
    );
};

export default Cart;