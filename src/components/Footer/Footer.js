import { NavCategories } from '../NavBar/NavBar'
import './Footer.scss'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <footer id='footer'>
        <div className='footer__columns container'>
            <div className='footer__column'>
                <h2 className='footer__column--heading'>Tienda</h2>
                <NavCategories/>
            </div>
        
            <div className='footer__column'>
                <h2 className='footer__column--heading'>Politicas</h2>
                <div className='footer__column--sites'>
                    <Link to='/politica-de-privacidad'><p>Politicas de privacidad</p></Link>
                    <Link to='/terminos-y-condiciones'><p>Terminos y condiciones</p></Link>
                </div>
            </div>
        
            <div className='footer__column'>
                <h2 className='footer__column--heading'>Servicios al cliente</h2>
                <div className='footer__column--sites'>
                    <Link to='/envios'><p>Envios</p></Link>
                    <Link to='/contactanos'><p>Contactanos</p></Link>
                </div>
            </div>
        
            <div className='footer__column'>
                <h2 className='footer__column--heading'>Metodos de pago</h2>
                <img className='footer__column--img' src='https://www.sumaelectrohogar.com.ar/img/cms/medios-de-pago-suma(2).png' alt='metodos de pago'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer