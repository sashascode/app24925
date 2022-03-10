import { ItemList } from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import { Spinner } from '../Spinner/spinner.js'
import { useParams } from "react-router-dom";
import './_ItemListContainer.scss'
import { getProducts } from '../../services/firebase/firebase.js';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        setSpinner(true);
        
        getProducts(categoryId).then((products) => {
            setProducts(products);
        }).finally(() => setSpinner(false));

        return (() => {
            setProducts();
        });
    },[categoryId]);

    return(
        <>
            {spinner ? <Spinner /> :
            <div className="container item__list"> 
                {categoryId ? null : <h1 className='item__list--title'>Productos destacados.</h1>}
                <div className="item__list--product">
                    <ItemList products={products}/>
                </div>
            </div>
            }
        </>
    )
}

export default ItemListContainer;