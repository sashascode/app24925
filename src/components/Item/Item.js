import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react'


export const Item = ({product}) => {
    const [details,setDetails] = useState(false);

    const showDetails = () => {
        setDetails(!details);
    }

    const onAdd = (count) => {
        if(count > 1){
        console.log(`Se agregaron ${count} articulos al carrito`);
        } else {
            console.log(`Se agrego ${count} articulo al carrito`);
        }
    }

    return(
    <>
        <div className="product"> 

            <img src={product.img} alt={product.name}/>
            <h3>{product.name}</h3>
            <h2><span><del>USD {product.price - 350}</del></span> USD {product.price}</h2>
            <button className="boton boton--primario" onClick={() => showDetails()}> {details ? "Ver Menos" : "Ver Más"}</button>

        <div className={ details ? null : "display-none" }  >
            <p>{product.description}</p>
            <ItemCount stock={15} initial={1} onAdd={onAdd}/>
        </div>
        </div>
    </>
    )
}