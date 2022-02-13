import { getProducts } from '../../asyncmock'
import { ItemList } from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import { Spinner } from '../Spinner/spinner.js'

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getProducts().then((products) => {
            setSpinner(false);
            setProducts(products);
        })
    },[])

    return(
        <>
        
        {spinner ? <Spinner /> : null }

        <div className="container-productos">  
            <ItemList products={products}/> 
        </div>
        </>
    )
}

export default ItemListContainer;