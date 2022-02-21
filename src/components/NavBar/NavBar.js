import './_NavBar.scss'
import CartWidget from '../CartWidget/CartWidget.js';
import { SiApple } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const NavBar = ({brandName1, brandName2}) => {
    return (
            <header>
                <div className="container">
                    <div className="bar">
                        <NavLink to="/" className="brand">
                            <h1 className="brand__name no-margin centrar-texto">
                                <span className='apple-icon'><SiApple/></span> {brandName1}<span className="brand__bold">{brandName2}</span>
                            </h1>    
                        </NavLink>

                        <nav className="navegation">
                            <NavLink
                            to="/category/mac"
                            className={({ isActive }) =>
                            isActive ? "ActiveOption" : "navegation__link"}>
                                Mac
                            </NavLink>
                            
                            <NavLink
                            to="/category/iphone"
                            className={({ isActive }) =>
                            isActive ? "ActiveOption" : "navegation__link"}>
                                iPhone
                            </NavLink>

                            <NavLink
                            to="/category/ipad"
                            className={({ isActive }) =>
                            isActive ? "ActiveOption" : "navegation__link"}>
                                iPad
                            </NavLink>

                            <NavLink
                            to="/category/accesorios"
                            className={({ isActive }) =>
                            isActive ? "ActiveOption" : "navegation__link"}>
                                Accesorios
                            </NavLink>

                            <CartWidget/>
    
                        </nav>

                    </div>
                </div>
            </header>
    )
  }

export default NavBar;