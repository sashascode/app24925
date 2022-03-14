import { CartContext } from './CartContext';
import SearchContext from './SearchContext';
import { NotificationProvider } from '../services/Notification/Notification';

const GlobalProvider = ({children}) => {
  return (
    <NotificationProvider>
        <SearchContext>
            <CartContext>
                {children}
            </CartContext>
        </SearchContext>
    </NotificationProvider>
  )
}

export default GlobalProvider