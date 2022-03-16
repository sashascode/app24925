import './_ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { IoMdReturnLeft } from 'react-icons/io';
import { FaMedal } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const ItemDetail = ({name, price, description, img, stock, id, detail}) => {
    const [count, setCount] = useState(0);
    const {addItem} = useCartContext();

    const onAdd = (count) => {
        if(count > 0){
            setCount(count);
            addItem({name, id, price, img, stock, detail}, count);
        };
    };

    return(
        <div className="container">
            <div className="card__detail">
                <img className="card__detail--image" src={img} alt={name}/>

                <div className="cart__detail--description">
                    <h3>{name}</h3>
                    <p>{description}</p>

                    <h2 className="card__detail--price"><span><del>USD {price + 350}</del></span> USD {price}</h2>
                
                    {count ?  <NavLink to="/cart"> <button className="boton boton--finish">Finalizar Compra</button> </NavLink> : 
                        stock ? <ItemCount stock={stock} initial={1} onAdd={onAdd}/> : <p style={{fontSize: '2rem', color: 'gray'}}>Producto no disponible</p>}

                    <div className="card__detail--benefits">
                        <p><span className="benefit"><IoMdReturnLeft/> Devolucion gratis.</span> Tenés 30 días desde que lo recibís.</p>
                        <p><span className="benefit"><FaMedal/> Garantia.</span> 12 meses de fabrica.</p>
                    </div>
                </div>
            </div>  
        </div>
    );
};