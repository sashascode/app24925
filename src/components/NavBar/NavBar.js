import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js';
import { SiApple } from 'react-icons/si';

const NavBar = () => {
    return (
        <>
        <div className="container">
        <div className="bar">
            <a className="brand" href="index.html">
            <h1 className="brand__name no-margin centrar-texto"><span className='apple-icon'><SiApple/></span> i<span className="brand__bold">Store</span></h1>
            </a>

            <nav class="navegation">
                <a href="mac.html" className="navegation__link">Mac</a>
                <a href="iphone.html" className="navegation__link">iPhone</a>
                <a href="ipad.html" className="navegation__link">iPad</a>
                <a href="accesorios.html" className="navegation__link">Accesorios</a>
                <CartWidget/>
            </nav>

        </div>
        </div>
        </>
    )
  }

export default NavBar;