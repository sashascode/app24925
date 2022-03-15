import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='centrar-texto'>
        <h2>No encontramos el producto :(</h2>
        <Link to='/'><button className='boton boton--primario'>Volver al inicio</button></Link>
    </div>
  )
};

export default NotFound