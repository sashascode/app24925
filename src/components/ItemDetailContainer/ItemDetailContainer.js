import { useEffect, useState } from "react";
import { getProduct } from '../../asyncmock';
import { ItemDetail } from '../ItemDetail/ItemDetail.js';
import { Spinner } from '../Spinner/spinner.js';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [spinner, setSpinner] = useState(true);
    const {productId} = useParams();

    useEffect(() => {
        getProduct(productId).then(product => {
            setSpinner(false);
            setProduct(product);
        });
    }, [productId])


    return(
        <>
            {spinner ? <Spinner /> : null }
            {spinner ? null : <ItemDetail product={product}/>}
        </>
    );


}