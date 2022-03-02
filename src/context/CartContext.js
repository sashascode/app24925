import {createContext, useState} from 'react'

const Context = createContext();

export function CartContext({children}) {
    const [cart, setCart] = useState([]);

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
            return countArray.reduce((acc, item) => acc += item);
        } else {
            return 0;
        }
    }

    const getTotal = () => {
        const countArray = cart.map(p => p.price);
        
        if(countArray.length){
            return countArray.reduce((acc, item) => acc += item);
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
        getTotal
    }}>
        {children}
    </Context.Provider>
  )
}

export default Context