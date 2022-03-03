import { ItemList } from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import { Spinner } from '../Spinner/spinner.js'
import { useParams } from "react-router-dom";
import './_ItemListContainer.scss'
import { getDocs, collection, query, where } from 'firebase/firestore' 
import {db} from '../../services/firebase/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {

        setSpinner(true);
        
        const collectionRef = categoryId ?
                query(collection(db,'products'), where('category', '==', categoryId)) :
                collection(db, 'products');
        getDocs(collectionRef).then(querySnapshot => {
            const products = querySnapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            })
            setProducts(products);
        }).finally(() => setSpinner(false));

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