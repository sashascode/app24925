import ItemCount from '../ItemCount/ItemCount'
import img from './iphone-13-pro-max-graphite-select.png'

const ItemListContainer = () => {

    const onAdd = (count) => {
        if(count > 1){
        console.log(`Se agregaron ${count} articulos al carrito`);
        } else {
            console.log(`Se agrego ${count} articulo al carrito`);
        }
    }

    return(
        <>
        <div className="container-producto">
        <div className="item-detail">
        <img className="image" alt="iPhone 13 Pro Max" src={img}/>
        <h3>iPhone 13 Pro Max 128gb</h3>
        <h2><span><del>USD 1.853</del></span> USD 1.500 </h2>
        </div>
        <ItemCount stock={15} initial={1} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default ItemListContainer;