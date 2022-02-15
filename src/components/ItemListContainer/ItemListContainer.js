import { getProducts } from '../../asyncmock'
import { ItemList } from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import { Spinner } from '../Spinner/spinner.js'

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getProducts().then((products) => { //fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone').then(response => {return response.json()}).then(res => mapeamos los productos que estan en res.results)
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