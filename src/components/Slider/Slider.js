import {useEffect, useState} from 'react'
import { getDocs, collection} from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import './Slider.scss'
import {Spinner} from '../Spinner/spinner'

function Slider() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
 
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0  ? length - 1 : current - 1);
  }

  useEffect(() => {
    const collectionRef = collection(db, 'sliderData');
    getDocs(collectionRef).then(querySnapshot => {
      const images = querySnapshot.docs.map(i => {
        return {id: i.id, ...i.data()};
      });
      setImages(images);
    });
  }, []);

  if(!length){
    return <Spinner/>;
  }

  return (
    <section className='slider'>
      <MdArrowBackIos className='slider__back-arrow' onClick={prevSlide}/>
      <MdArrowForwardIos className='slider__forward-arrow' onClick={nextSlide} />
      {images.map((slide, index) => {
        return(
          <div key={index} className={index === current ? 'slide active' : 'slide'}>
            {index === current && (<img src={slide.image} alt={slide.alt} className='slider__image-banner' />)}
          </div>
        )
      })}
    </section>
  )
}

export default Slider