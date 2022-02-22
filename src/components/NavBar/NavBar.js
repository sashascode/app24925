import './_NavBar.scss'
import CartWidget from '../CartWidget/CartWidget.js';
import { SiApple } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../asyncmock';
import { useState, useEffect } from 'react';

const NavBar = ({brandName1, brandName2}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories);
        })
    },[]);


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
                            {categories.map((cat) => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => 
                                isActive ? "ActiveOption" : "navegation__link"}> {cat.description} </NavLink>  )}
                            <CartWidget/>
                        </nav>
                    </div>
                </div>
            </header>
    )
  }

export default NavBar;