import {useState,createContext, useContext, useEffect} from 'react'
import { getProducts } from '../services/firebase/firebase';

const Context = createContext();

function SearchContext({children}) {
    const [products, setProducts] = useState([]);
    const [productsFinded, setProductsFinded] = useState([]);

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        })
    }, []);

    function searchItem(search) {
        const searchWords = search.split(' ');
        
        products.forEach(product => {
            searchWords.forEach(word => {
                if(product.name.toLowerCase().split(' ').includes(word.toLowerCase())){
                    setProductsFinded([...productsFinded, product.id]);
                };
            });   
        });

        console.log(productsFinded);
    };

  return (
    <Context.Provider value={{searchItem, productsFinded}}>
        {children}
    </Context.Provider>
  )
}

export default SearchContext

export const useSearchContext = () => {
    return useContext(Context);
}