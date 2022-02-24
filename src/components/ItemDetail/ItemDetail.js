import './_ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { IoMdReturnLeft } from 'react-icons/io'
import { FaMedal } from 'react-icons/fa'
import { useState, useContext } from 'react' 
import { NavLink } from 'react-router-dom' 
import Context from '../../context/CartContext'



export const ItemDetail = ({name, price, description, img, stock, id}) => {
    const [count, setCount] = useState(0);
    const {addItem} = useContext(Context);

    const onAdd = (count) => {
        if(count > 0){
            setCount(count);
            addItem({name, id, price}, count);
        }
    }

    return(
        <>
            <div className="container">
                <div className="card-detail">
                    <img className="image" src={img} alt={name}/>

                    <div className="product-details">
                        <h3>{name}</h3>
                        <p>{description}</p>

                        <h2 className="price"><span><del>USD {price + 350}</del></span> USD {price}</h2>
                
                        {count ?  <NavLink to="/cart"> <button className="boton boton--finish">Finalizar Compra</button> </NavLink> : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}

                        <div className="guaranteed">
                            <p><span className="benefits"><IoMdReturnLeft/> Devolucion gratis.</span> Tenés 30 días desde que lo recibís.</p>
                            <p><span className="benefits"><FaMedal/> Garantia.</span> 12 meses de fabrica.</p>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}