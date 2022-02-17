import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { IoMdReturnLeft } from 'react-icons/io'
import { FaMedal } from 'react-icons/fa'



export const ItemDetail = ({product}) => {

    const onAdd = (count) => {
        if(count > 1){
        console.log(`Se agregaron ${count} articulos al carrito`);
        } else {
            console.log(`Se agrego ${count} articulo al carrito`);
        }
    }

    return(
        <>
            <div className="container">
                <div className="card-detail">
                    <img className="image" src={product.img} alt={product.name}/>

                    <div className="product-details">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>

                        <h2 className="price"><span><del>USD {product.price + 350}</del></span> USD {product.price}</h2>
                
                        <ItemCount stock={ product.stock } initial={ 1 } onAdd={ onAdd }/>

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