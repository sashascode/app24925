import { useEffect, useState } from "react";
import { getCategories } from '../../asyncmock';
import CategoryList from '../CategoryList/CategoryList';
import { Spinner } from '../Spinner/spinner.js';
import './CategoryContainer.scss'


function CategoryContainer() {
    const [categories, setCategories] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories);
            setSpinner(false);
        });
    },[]);

  return (
    <section className='container category__container'>
        {spinner ? <Spinner/> : <CategoryList categories={categories}/>}
    </section>
  )
}

export default CategoryContainer