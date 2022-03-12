import './ContactForm.scss';
import {writeBatch, getDoc, doc, addDoc, collection, Timestamp} from 'firebase/firestore';
import {db} from '../../services/firebase/firebase';
import {useState} from 'react'
import {useCartContext} from '../../context/CartContext';
import { useNotificationContext } from '../../services/Notification/Notification';
import {Spinner} from '../Spinner/spinner';
import CartEmpty from '../CartEmpty/CartEmpty';

function ContactForm() {
    const {setNotification} = useNotificationContext();
    const {cart, getTotal, clearCart, removeItem} = useCartContext();
    const [processingOrder, setProcessingOrder] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [zip, setZip] = useState('');
   
    const handleContactForm = (e) => {
        e.preventDefault();
        if(name !== '' && address !== '' && email !== '' && phone !== '' && zip !== ''){
            setProcessingOrder(true);
            const objOrder = {
                buyer: {
                name: name,
                phone: phone,
                email: email,
                address: address,
                zip: zip
                },
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];

            const executeOrder = () => {
                if(outOfStock.length === 0){
                    addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                        batch.commit().then(() => {
                            setNotification('success',`Bien! La orden se genero exitosamente`);
                        });
                    }).finally(() => {
                        setProcessingOrder(false);
                        clearCart();
                    });
                } else {
                    outOfStock.forEach(prod => {
                        setNotification('error',`El producto ${prod.name} se encuentra agotado`);
                        removeItem(prod.id);
                    });
                };
            };

            objOrder.items.forEach((prod) => {
                getDoc(doc(db, 'products', prod.id)).then(response => {
                    if(response.data().stock >= prod.count){
                        batch.update(doc(db, 'products', response.id), {
                            stock: response.data().stock - prod.count
                        });
                    } else {
                        outOfStock.push({id: response.id, ...response.data()});
                    };
                }).catch(err => console.log(err)).then(() => executeOrder()).finally(setProcessingOrder(false));
            });
        
        } else {
            setNotification('error', 'Todos los campos son obligatorios!');
        };
    };

    if(processingOrder) {
        return <Spinner/>;
    }

    if(cart.length === 0){
        return(
            <CartEmpty/>
        ) 
    };

    return(
        <div id='form'>
            <div className='form'>
            <h1>Compra Rápida</h1>
            <h2>Completa los siguientes campos para realizar tu pedido.</h2>
            <form className="form__content" onSubmit={(e) => handleContactForm(e)}>
                <label htmlFor="name">Nombre <span style={{color: 'red'}}>*</span></label>
                <input type="text" placeholder="Tu Nombre" id="name" name='name' onChange={({target}) => setName(target.value)}/>
                    
                <label htmlFor="email">E-mail <span style={{color: 'red'}}>*</span></label>
                <input type="email" placeholder="Tu Email" id="email" name='email' onChange={({target}) => setEmail(target.value)}/>

                <label htmlFor="phone">Teléfono <span style={{color: 'red'}}>*</span></label>
                <input type="tel" placeholder="Tu Teléfono" id="phone" name='phone' onChange={({target}) => setPhone(target.value)}/>

                <label htmlFor="address">Direccion <span style={{color: 'red'}}>*</span></label>
                <input type="text" placeholder="Tu Direccion" id="address" name='address' onChange={({target}) => setAddress(target.value)}/>

                <label htmlFor="zip">Codigo Postal <span style={{color: 'red'}}>*</span></label>
                <input type="tel" placeholder="Tu Codigo Postal" id="zip" name='zip' onChange={({target}) => setZip(target.value)}/>

                <input className="boton boton--primario" type="submit" value="Enviar"></input>
            </form>   
            </div>
        </div>            
    )
}
export default ContactForm