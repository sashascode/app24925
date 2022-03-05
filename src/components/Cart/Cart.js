import './Cart.scss'
import {useContext} from 'react'
import Context from '../../context/CartContext';
import {FaRegTrashAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Cart() {
    const {cart, getQuantity, getTotal, removeItem} = useContext(Context);
    

    if(!cart.length){
        return(
            <div className='empty container'>
                <img src='./img/empty-cart.png' alt='empty cart'></img>
                <h2 className='empty__title'>No hay productos en el carrito</h2>
                <p>Por favor agrega algo a tu carrito</p>
                <Link to={'/'}><button className='boton boton--primario'>Seguir comprando</button></Link>
            </div>
        ) 
    }

    return (
        <div id='cart'>
            <div className='cart'>
                <header className='cart__header'>
                    <h1>Carrito</h1>
                </header>
                
                <main>
                    <section className="cart__summary section">
                    <div className="cart__summary--quantity">{`🛒${getQuantity()}  items`}</div>
                    <div className="cart__summary--total">{`Total: USD ${getTotal()} 💲`}</div>
                    </section>
                    
                    <section className="cart__actions section">
                    <button className='boton boton--primario'>Ir a pagar </button>
                    <img src='https://www.rimaya.com.ar/img/cms/pagos.png' alt='formas de pago'></img>
                    </section>

                    <section className="cart__items">
                    <ul>
                        
                            {cart.map((i) => {
                                return(
                                <li key={i.id} className="cart__item">
                                    <div className='cart__item--container'>
                                        <img src={i.img} alt={i.name} className='cart__item--image'/>
                                        <h3 className="cart__item--name">{i.name}</h3>
                                        <p className="cart__item--price">{`Precio unitario: $${i.price}`}</p>
                                        <p className='cart__item--count'>{`Cantidad: ${i.count}`}</p>
                                        <span onClick={() => removeItem(i.id)}><FaRegTrashAlt className='cart__item--trash'></FaRegTrashAlt></span>
                                    </div>
                                </li>
                            )})}
                        
                    </ul>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Cart