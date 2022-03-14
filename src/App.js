import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from './context/CartContext';
import { NotificationProvider } from './services/Notification/Notification';
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import SearchContext from './context/SearchContext';

function App() {

  return (
    <div className="App">
    <NotificationProvider>
      <SearchContext>
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
      </SearchContext>  
    </NotificationProvider>  
    </div>
  );
}

export default App;
