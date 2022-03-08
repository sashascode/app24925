import {addDoc, collection, Timestamp} from 'firebase/firestore';
import {db} from '../../services/firebase/firebase';
import {useState, useContext} from 'react'
import Context from '../../context/CartContext';
import './ContactForm.scss';

function ContactForm() {
    const {cart, getTotal, clear} = useContext(Context);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
   
    const handleContactForm = (e) => {
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

            addDoc(collection(db, 'orders'), objOrder).then(response => {
                console.log(response);
                clear();
            }).catch(error => console.log(error))
        }
    }

    return(
        <div id='form'>
            <div className='form container'>
            <h1>Compra Rápida</h1>
            <h2>Completa los siguientes campos para realizar tu pedido.</h2>
            <form className="form__content">
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

                <input className="boton boton--primario" type="submit" value="Enviar" onClick={() => handleContactForm}></input>
            </form>   
            </div>
        </div>            
    )
}
export default ContactForm