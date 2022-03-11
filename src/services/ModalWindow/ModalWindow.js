import './ModalWindow.scss'
import {useState} from 'react'

function ModalWindow({show}) {
    const [state, setState] = useState(show)

    if(!state){
        return null;
    }

  return (
    <div id="myModal" class="modal">
        <div class="modal__content">
            <p onClick={() => setState(false)}>X</p>
            <h2>Mi primer Modal</h2>
            <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
        </div>  
    </div>
  )
}

export default ModalWindow