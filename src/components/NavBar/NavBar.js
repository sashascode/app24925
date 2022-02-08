import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js';
import { SiApple } from 'react-icons/si';

const NavBar = ({brandName1, brandName2}) => {
    return (
        <>
        <div className="container">
        <div className="bar">
            <a className="brand" href="index.html">
            <h1 className="brand__name no-margin centrar-texto">
                <span className='apple-icon'><SiApple/></span> {brandName1}<span className="brand__bold">{brandName2}</span>
            </h1>
            </a>

            <nav className="navegation">
                <a href="mac.html" className="navegation__link boldHover">Mac</a>
                <a href="iphone.html" className="navegation__link boldHover">iPhone</a>
                <a href="ipad.html" className="navegation__link boldHover">iPad</a>
                <a href="accesorios.html" className="navegation__link boldHover">Accesorios</a>
                <CartWidget colorText="black"/>
            </nav>

        </div>
        </div>
        </>
    )
  }

export default NavBar;