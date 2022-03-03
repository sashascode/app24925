import { useEffect, useState } from "react";
import CategoryList from '../CategoryList/CategoryList';
import { Spinner } from '../Spinner/spinner.js';
import './CategoryContainer.scss';
import { getDocs, collection} from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

function CategoryContainer() {
  const [categories, setCategories] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setSpinner(true);
    const collectionRef = collection(db, 'categories');
    getDocs(collectionRef).then(querySnapshot => {
        const categories = querySnapshot.docs.map(cat => {
            return {id: cat.id, ...cat.data()};
        })
        setCategories(categories);
    }).finally(() => setSpinner(false));
  },[]);

  if(spinner){
    return <Spinner/>;
  }

  return (
    <>
      <div className="white-bg">
        <section className='container category__container'>
          <CategoryList categories={categories} />
        </section>
      </div> 
    </> 
    
  )
}

export default CategoryContainer