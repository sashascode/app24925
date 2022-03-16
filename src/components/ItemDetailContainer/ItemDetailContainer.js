import { useEffect, useState } from "react";
import { ItemDetail } from '../ItemDetail/ItemDetail.js';
import { Spinner } from '../Spinner/Spinner.js';
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase/firebase.js";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [spinner, setSpinner] = useState(true);
    const {productId} = useParams();

    useEffect(() => {
        setSpinner(true);
        getProductById(productId).then((product) => {
            setProduct(product);
        }).finally(setSpinner(false));

        return (() => {
            setProduct();
        });
    }, [productId]);  

    return(
        <>
            {spinner && <Spinner />};
            {!spinner && <ItemDetail {...product}/>};
        </>
    );
};