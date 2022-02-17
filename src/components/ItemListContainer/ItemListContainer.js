import { getProducts } from '../../asyncmock'
import { ItemList } from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import { Spinner } from '../Spinner/spinner.js'
import { useParams } from "react-router-dom";

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        getProducts(categoryId).then((products) => { //fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone').then(response => {return response.json()}).then(res => mapeamos los productos que estan en res.results)
            setSpinner(false);
            setProducts(products);
        })
    },[categoryId])

    return(
        <>
        {spinner && <Spinner />}
        <div className="container-productos">  
            <ItemList products={products}/> 
        </div>
        </>
    )
}

export default ItemListContainer;