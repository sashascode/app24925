import { useState,createContext, useContext, useEffect } from 'react'
import { getProducts } from '../services/firebase/firebase';

const Context = createContext();

function SearchContext({children}) {
    const [productsFinded, setProductsFinded] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        });

        return(() => {
            setProducts();
            setProductsFinded();
            setNotFound();
        });
    },[]);

    function searchItem(search) {
        if(products){
            const filteredProducts = products.filter(product => {
                return product.name.toLowerCase().includes(search.toLowerCase());
            });

            if(filteredProducts.length === 0){
                setNotFound(true);
            } else {
                setProductsFinded(filteredProducts);
                setNotFound(false);
            };
        };
    };

  return (
    <Context.Provider value={{ searchItem, productsFinded, notFound, setNotFound}}>
        {children}
    </Context.Provider>
  );
};

export default SearchContext;

export const useSearchContext = () => {
    return useContext(Context);
};