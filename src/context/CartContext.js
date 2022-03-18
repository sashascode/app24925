import { useState,createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../customHooks/useLocalStorage';
import { useNotificationContext } from '../services/Notification/Notification';

const Context = createContext();

export const CartContext = ({children}) => {
    const [inLocalStorage, setLocalStorage] = useLocalStorage();
    const [cart, setCart] = useState(inLocalStorage('cart') || []);
    const { setNotification } = useNotificationContext();

    useEffect(() => {
        setLocalStorage('cart',cart);
    },[cart, setLocalStorage]);
    
    const addItem = (productToAdd, count) => {

        const newObj = {
            ...productToAdd,
            count
        };

        if(isInCart(productToAdd.id)){
            const newCart =
                cart.map((product) => {
                    if(product.id === productToAdd.id){
                        product.count += newObj.count;
                    };
                    return product;
                });
            setCart(newCart);
        } else { 
            setCart([...cart, newObj]); 
        };

        setNotification('success', `Se agregó ${productToAdd.name} al carrito`);
    };

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    };

    const getQuantity = () => {
        let total = 0;
        cart.forEach(product => {
            total += product.count;
        });
        return total;
    };

    const getTotal = () => {
        let total = 0;
        cart.forEach(product => {
            total += product.price * product.count;
        });
        return total;
    };

    const decrementAmount = (id) => {
        const cartUpdated = cart.map(product => {
            if(product.id === id){
                product.count -= 1;
            }
            return product;
        });
        setCart(cartUpdated);
    };

    const incrementAmount = (id) => {
        const cartUpdated = cart.map(product => {
            if(product.id === id){
                product.count += 1;
            };
            return product;
        });
        setCart(cartUpdated);
    };

  return (
    <Context.Provider value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getQuantity,
        getTotal,
        setCart,
        decrementAmount,
        incrementAmount
    }}>
        {children}
    </Context.Provider>
  );
};

export const useCartContext = () => {
    return useContext(Context);
};