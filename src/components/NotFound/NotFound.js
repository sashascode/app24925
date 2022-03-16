import { Link } from 'react-router-dom';
import { useSearchContext } from '../../context/SearchContext';

function NotFound() {
  const { setNotFound } = useSearchContext();
  return (
    <div className='centrar-texto'>
        <h2>No encontramos el producto :(</h2>
        <Link to='/'><button onClick={() => setNotFound(false)} className='boton boton--primario'>Volver al inicio</button></Link>
    </div>
  )
};

export default NotFound;