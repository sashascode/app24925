import './Category.scss';
import {Link} from 'react-router-dom';

function Category({category}) {
  return (
    <div className='card__category'>
        <h2 className='card__category--title'>{category.description}</h2>
        <img src={category.img} alt={category.description} className='card__category--image'/>
        <p className='card__category--text'>{category.text}</p>
        <Link to={`/category/${category.id}`}><button className='boton boton--ver aling-izq'>Ver más &gt;</button></Link> 
    </div>
  )
}

export default Category;