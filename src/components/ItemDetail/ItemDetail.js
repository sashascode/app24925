import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'



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
                <div className="card">
                    <img className="image" src={product.img} alt={product.name}/>
                
                    <h2>{product.name}</h2>

                    <p>{product.description}</p>
                    <li>iOS 15 con nuevas funcionalidades para aprovechar tu iPhone al máximo</li>

                    <h2><span><del>USD {product.price + 350}</del></span> USD {product.price}</h2>

                    <p><span><strong>Color:</strong> Grafito</span></p>

                    <ItemCount stock={ 15 } initial={ 1 } onAdd={ onAdd }/>
                </div>  
            </div>
        </>
    );
}