import {writeBatch, getDoc, doc, addDoc, collection, Timestamp} from 'firebase/firestore';
import {db} from '../../services/firebase/firebase';
import {useState, useContext} from 'react'
import Context from '../../context/CartContext';
import './ContactForm.scss';
import CartEmpty from '../CartEmpty/CartEmpty';

function ContactForm() {
    const {cart, getTotal, clear} = useContext(Context);
    // const [processingOrder, setProcessingOrder] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
   
    const handleContactForm = (e) => {
        // setProcessingOrder(true);
        //* Obtener datos de contacto e items *//
        e.preventDefault();
        if(name !== '' && address !== '' && email !== '' && phone !== ''){
            const objOrder = {
                buyer: {
                name: name,
                phone: phone,
                email: email,
                address: address
                },
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            };

        //* Validar que haya stock *//
            const batch = writeBatch(db);
            const outOfStock = [];

            objOrder.items.forEach((i) => {
                getDoc(doc(db, 'products', i.id)).then(response => {
                    if(response.data().stock >= i.count){
                        batch.update(doc(db, 'products', response.id), {
                            stock: response.data().stock - i.count
                        })
                    } else {
                        outOfStock.push({id: response.id, ...response});
                    }
                })
            })
        
        //* Si hay stock, agregar nueva orden *//
            if(outOfStock.length === 0){
                addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                    batch.commit().then(() => console.log(`El id de su orden es ${id}`));
                }).finally(() => {
                    // setProcessingOrder(false);
                    clear();
                })
            } else {
                outOfStock.items.forEach(i => {
                    console.log(`El producto ${i.name} se encuentra agotado`);
                })
            }
        }
    }

    if(cart.length === 0){
        return <CartEmpty/>
    }

    return(
        <div id='form'>
            <div className='form container'>
            <h1>Compra Rápida</h1>
            <h2>Completa los siguientes campos para realizar tu pedido.</h2>
            <form className="form__content" onSubmit={(e) => handleContactForm(e)}>
                <fieldset>
                    <legend>Información Personal</legend>

                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder="Tu Nombre" id="nombre" onChange={({target}) => setName(target.value)}/>
                    
                    <label htmlFor="email">E-mail</label>
                    <input type="email" placeholder="Tu Email" id="email" onChange={({target}) => setEmail(target.value)}/>

                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" placeholder="Tu Teléfono" id="telefono" onChange={({target}) => setPhone(target.value)}/>

                    <label htmlFor="direccion">Direccion</label>
                    <input type="tel" placeholder="Tu Direccion" id="direccion" onChange={({target}) => setAddress(target.value)}/>
                </fieldset>

                <input className="boton boton--primario" type="submit" value="Enviar"></input>
            </form>   
            </div>
        </div>            
    )
}
export default ContactForm