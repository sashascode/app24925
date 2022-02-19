import './_Item.scss'
import { useState } from 'react'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'


export const Item = ( {product} ) => {
    const [button,setButton] = useState(false);

    return(
    <>
        <div className="card" onMouseEnter={() => setButton(true)} onMouseLeave={()=> setButton(false)}> 
            <Link to={`/detail/${product.id}`}>
                <div className="content">
                    <img src={ product.img } alt={ product.name }/>
                    <h3>{ product.name }</h3>
                    <h2><span><del>USD { product.price + 350 }</del></span> USD { product.price }</h2>

                    {button && <FadeIn><footer className="boton boton--primario">
                        Ver Más
                    </footer></FadeIn> }
                </div>
            </Link>
        </div>
        
        
        
    </>
    )
}