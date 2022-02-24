import {useEffect, useState} from 'react'
import {getSliderData} from '../../asyncmock'
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
    getSliderData().then((images) => {
      setImages(images);
    });

    //  const interval = setInterval(() => {
    //   nextSlide();
    //  },8000)

    // return function cleanup() {
    //  clearInterval(interval);
    // }

  }, [])

  if(length === 0){
    return <Spinner/>;
  }

  return (
    <section className='slider'>
      <MdArrowBackIos className='back-arrow' onClick={prevSlide}/>
      <MdArrowForwardIos className='forward-arrow' onClick={nextSlide} />
      {images.map((slide, index) => {
        return(
          <div key={index} className={index === current ? 'slide active' : 'slide'}>
            {index === current && (<img src={slide.image} alt={slide.alt} className='image-banner' />)}
          </div>
        )
      })}
    </section>
  )
}

export default Slider