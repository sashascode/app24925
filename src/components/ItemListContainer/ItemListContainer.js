import { getProducts } from '../../asyncmock'
import { ItemList } from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products);
        })
    },[])

    return(
        <>
        <div className="container-productos">
                <ItemList products={products}/>
        </div>
        </>
    )
}

export default ItemListContainer;