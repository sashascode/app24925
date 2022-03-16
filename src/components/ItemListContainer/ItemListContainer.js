import { ItemList } from '../ItemList/ItemList.js';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner.js';
import { useParams } from "react-router-dom";
import './_ItemListContainer.scss';
import { getProducts } from '../../services/firebase/firebase.js';
import { useSearchContext } from '../../context/SearchContext.js';
import NotFound from '../NotFound/NotFound.js';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const { categoryId } = useParams();
    const { productsFinded, notFound } = useSearchContext();

    useEffect(() => {
        setSpinner(true);
        
        getProducts(categoryId).then((products) => {
            setProducts(products);
        }).finally(() => setSpinner(false));

        return (() => {
            setProducts();
        });
    },[categoryId]);

    if(notFound) {
       return <NotFound/>
    };

    return(
        <>
            {spinner ? <Spinner /> :
                <div className="container item__list"> 
                    {categoryId || productsFinded?.length ? null : <h1 className='item__list--title'>Productos destacados.</h1>}
                    <div className="item__list--product">
                        <ItemList products={productsFinded?.length ? productsFinded : products}/> 
                    </div>
                </div>
            }
        </>
    );
}

export default ItemListContainer;