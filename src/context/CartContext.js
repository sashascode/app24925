import {createContext} from 'react'
import useLocalStorage from '../customHooks/useLocalStorage';

const Context = createContext();

export function CartContext({children}) {
    const [cart, setCart] = useLocalStorage('cartStorage', []);

    const addItem = (productToAdd, count) => {

        const newObj = {
            ...productToAdd,
            count
        }

        if(isInCart(productToAdd.id)){
            const newCart =
                cart.map((p) => {
                    if(p.id === productToAdd.id){
                        p.count += newObj.count;
                    }
                    return p;
                })
            setCart(newCart);
        } else { 
            setCart([...cart, newObj]); 
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((p) => p.id !== id));
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    const getQuantity = () => {
        const countArray = cart.map(p => p.count);
        
        if(countArray.length){
            return countArray.reduce((acc, count) => acc += count);
        } else {
            return 0;
        }
    }

    const getTotal = () => {
        const countArray = cart.map(p => {
            if(p.count > 1){
                return p.price * p.count;
            }
            return p.price
        });
        
        if(countArray.length){
            return countArray.reduce((acc, price) => acc += price);
        } else {
            return 0;
        }
    }

    console.log(cart);

  return (
    <Context.Provider value={{
        cart,
        addItem,
        removeItem,
        clear,
        getQuantity,
        getTotal,
        setCart
    }}>
        {children}
    </Context.Provider>
  )
}

export default Context