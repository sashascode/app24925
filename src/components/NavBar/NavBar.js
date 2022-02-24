import './_NavBar.scss'
import { NavLink } from 'react-router-dom';
import NavCat from './NavCat'
import NavIcons from './NavIcons';
import { SiApple } from 'react-icons/si';


const NavBar = ({brandName}) => {
    

    return (
            <header>
                <div className="container">
                    <div className="bar">
                        <NavLink to="/" className="brand">
                            <h1 className="brand__name no-margin centrar-texto">
                                <span className='apple-icon'><SiApple/></span><span className="brand__bold"> {brandName}</span>
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