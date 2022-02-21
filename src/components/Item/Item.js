import './_Item.scss'
import { useState } from 'react'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'
import CrossfadeImage from 'react-crossfade-image'


export const Item = ({product}) => {
    const [handleHover,setHandleHover] = useState(false);

    return(
    <>
        <div className="card" onMouseEnter={() => setHandleHover(true)} onMouseLeave={()=> setHandleHover(false)}> 
            <Link to={`/detail/${product.id}`}>
                <div className="content">
                    <CrossfadeImage duration={200} src={handleHover ? product.img2 : product.img} alt={ product.name }/>
                    <h3>{ product.name }</h3>
                    <h2><span><del>USD { product.price + 350 }</del></span> USD { product.price }</h2>

                    {handleHover && <FadeIn transitionDuration={500}><footer className="boton boton--primario">
                        Ver Más
                    </footer></FadeIn> }
                </div>
            </Link>
        </div>
        
        
        
    </>
    )
}