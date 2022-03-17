import './_NavBar.scss';
import { NavLink } from 'react-router-dom';
import { SiApple } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import CartWidget from '../CartWidget/CartWidget.js';
import { getCategories } from '../../services/firebase/firebase';
import { useSearchContext  } from '../../context/SearchContext';

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
                    <NavCategories/>
                    <NavIcons/> 
                </div>
            </div>
        </header>
    )
}

export default NavBar;

export const NavCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories);
        });
    },[]);

  return (
    <nav className="nav__links stroke">
        {categories.map((cat) => 
            <li key={cat.id}>
                <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => 
                    isActive ? "nav__links--active" : "nav__links--category"}>
                        {cat.description} 
                </NavLink> 
            </li> 
        )}
    </nav>

  )
}

const NavIcons = () => {
    const [search, setSearch] = useState('');
    const { searchItem } = useSearchContext();

  return (
    <div className='nav__icons'>
        <div className='search__box'>
            <input type='text' placeholder='Buscar' id='search' name='search' value={search} onChange={({target}) => setSearch(target.value)}/>
            <NavLink to={`/search/${search}`}>
                <RiSearchLine className='nav__icons--icon search__box-submit' onClick={() => searchItem(search)}/>
            </NavLink>
        </div>  
        <CartWidget/>
    </div>
  );
};