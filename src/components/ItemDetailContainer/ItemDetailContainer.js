import { useEffect, useState } from "react"
import { getProduct } from '../../asyncmock'
import { ItemDetail } from '../ItemDetail/ItemDetail.js'
import { Spinner } from '../Spinner/spinner.js'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getProduct().then(product => {
            setSpinner(false);
            setProduct(product);
        });
    }, [])


    return(
        <>
            {spinner ? <Spinner /> : null }
            {spinner ? null : <ItemDetail product={product}/>}
        </>
    );


}