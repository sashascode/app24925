import './_NavBar.scss'
import { NavLink } from 'react-router-dom';
import NavCat from './NavCat'
import NavIcons from './NavIcons';
import { SiApple } from 'react-icons/si';


const NavBar = ({brandName}) => {
    

    return (
            <header>
                <div className="container nav">
                    <div className="nav__bar">
                        <NavLink to="/" className="nav__bar--brand">
                            <h1 className="nav__bar--brand--name no-margin centrar-texto">
                                <span className='"nav__bar--brand--icon'><SiApple/></span><span className="bold">{brandName}</span>
                            </h1>    
                        </NavLink>
                        <NavCat/>
                        <NavIcons/> 
                    </div>
                </div>
            </header>
    )
  }

export default NavBar;