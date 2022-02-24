import { getProducts } from '../../asyncmock'
import { ItemList } from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import { Spinner } from '../Spinner/spinner.js'
import { useParams } from "react-router-dom";
import './_ItemListContainer.scss'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        setSpinner(true);
        getProducts(categoryId).then((products) => { //fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone').then(response => {return response.json()}).then(res => mapeamos los productos que estan en res.results)
            setSpinner(false);
            setProducts(products);
        })
    },[categoryId])

    return(
        <>
            {spinner ? <Spinner /> :
            <div className="container"> 
                {categoryId ? <h1 className='title1 aling-left'>{categoryId}</h1> : <h1 className='title1'>Completá tu experiencia con estos productos.</h1>}
                <div className="productos">
                    <ItemList products={products}/>
                </div>
            </div>
            }
        </>
    )
}

export default ItemListContainer;