import './_NavBar.scss'
import { RiUserLine, RiSearchLine } from 'react-icons/ri';
import CartWidget from '../CartWidget/CartWidget.js';

function NavIcons() {
  return (
    <div className='nav__icons'>
        <RiSearchLine className='nav__icons--icon'/>
        <RiUserLine className='nav__icons--icon'/>
        <CartWidget/>
    </div>
  )
}

export default NavIcons