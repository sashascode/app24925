import './Category.scss'

function Category({category}) {
  return (
    <div className='card__category'>
        <h2 className='card__category--title'>{category.description}</h2>
        <img src={category.img} alt={category.description} className='card__category--image'/>
        <p className='card__category--text'>{category.text}</p>
    </div>
  )
}

export default Category