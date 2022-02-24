import './_NavBar.scss'
import { RiUserLine, RiSearchLine } from 'react-icons/ri';
import CartWidget from '../CartWidget/CartWidget.js';

function NavIcons() {
  return (
    <div className='nav-icons'>
        <RiSearchLine className='nav-icon'/>
        <RiUserLine className='nav-icon'/>
        <CartWidget/>
    </div>
  )
}

export default NavIcons