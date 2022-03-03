import { useEffect, useState } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail.js';
import { Spinner } from '../Spinner/spinner.js';
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import {db} from '../../services/firebase/firebase';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [spinner, setSpinner] = useState(true);
    const {productId} = useParams();

    useEffect(() => {
        setSpinner(true);
        
        const docRef = doc(db, 'products', productId);
        getDoc(docRef).then(querySnapshot => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()};
            setProduct(product);
        }).finally(setSpinner(false));

    }, [productId])


    return(
        <>
            {spinner && <Spinner />};
            {!spinner && <ItemDetail {...product}/>};
        </>
    );


}