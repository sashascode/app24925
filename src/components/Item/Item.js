import './_Item.scss'
import { useState } from 'react'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'


export const Item = ({product}) => {
    const [handleHover,setHandleHover] = useState(false);

    return(
        <>
            <div className="card" onMouseEnter={() => setHandleHover(true)} onMouseLeave={()=> setHandleHover(false)}> 
                <Link to={`/detail/${product.id}`}>
                    <div className="card__content--item">
                        <img src={handleHover ? product?.img2 : product?.img} alt={ product.name }/>
                        <h3 className='item--name'>{ product?.name }</h3>
                        <h2><span><del>USD { product?.price + 350 }</del></span> <span className='item--price'>USD { product?.price }</span></h2>

                        {handleHover && <FadeIn transitionDuration={500}><footer className="boton boton--ver">
                            Ver Más
                        </footer></FadeIn> }
                    </div>
                </Link>
            </div>   
        </>
    );
};