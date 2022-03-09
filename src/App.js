import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Slider from './components/Slider/Slider';
import {CartContext} from './context/CartContext';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';
import Cart from './components/Cart/Cart';
import ContactForm from './components/ContactForm/ContactForm';
import { NotificationProvider } from './services/Notification/Notification';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
    <NotificationProvider>  
      <CartContext>
        <BrowserRouter>
          <NavBar brandName="iMarket" />
          <Routes>
            <Route path='/' element={
              <>
                <Slider/>
                <CategoryContainer/> 
                <ItemListContainer/>
              </>
            }/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<ContactForm/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContext>
    </NotificationProvider>  
    </div>
  );
}

export default App;
