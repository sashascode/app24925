import { useEffect, useState } from "react";
import CategoryList from '../CategoryList/CategoryList';
import { Spinner } from '../Spinner/Spinner.js';
import { getCategories } from "../../services/firebase/firebase";
import './CategoryContainer.scss';

const CategoryContainer = () => {
  const [categories, setCategories] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setSpinner(true);
    getCategories().then((categories) => {
      setCategories(categories);
    }).finally(() => setSpinner(false));

    return (() => {
      setCategories()
    });
  },[]);

  if(spinner){
    return <Spinner/>;
  };

  return (
      <div className="white-bg">
        <section className='container category__container'>
          <CategoryList categories={categories} />
        </section>
      </div> 
  );
};

export default CategoryContainer;