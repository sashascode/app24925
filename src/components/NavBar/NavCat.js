import './_NavBar.scss'
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../asyncmock';
import { useState, useEffect } from 'react';

function NavCat() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories);
        })
    },[]);


  return (
    <nav className="nav__links stroke">
        {categories.map((cat) => 
            <li key={cat.id}>
                <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => 
                    isActive ? "nav__links--active" : "nav__links--category"}>
                        {cat.description} 
                </NavLink> 
            </li> )}
    </nav>

  )
}

export default NavCat