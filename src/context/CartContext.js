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

    console.log(cart);

  return (
    <Context.Provider value={{
        cart,
        addItem,
        removeItem,
        clear
    }}>
        {children}
    </Context.Provider>
  )
}

export default Context