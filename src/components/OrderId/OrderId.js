import './OrderId.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNotificationContext } from '../../services/Notification/Notification';

function OrderId({orderId}) {
    const {setNotification} = useNotificationContext();

  return (
    <div className='centrar-texto card__detail'>
      <div className='order__info'>
        <h1>Compra finalizada :)</h1>
        <h3 style={{fontWeight: '400'}}>El ID de tu orden es:</h3>
        <div className='gradient-border'>
          <p>{orderId}</p>
        </div>
        <CopyToClipboard text={orderId}>
          <button className='boton boton--ver' onClick={() => setNotification('success', 'Copiado al portapapeles!') }>copiar id</button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default OrderId;