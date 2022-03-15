import './App.css';
import GlobalProvider from './context/GlobalProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div className="App">
    <GlobalProvider>
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
            <Route path='/search/:search' element={<ItemListContainer/>}/>
            <Route path='/search/' element={<NotFound/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<ContactForm/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter> 
    </GlobalProvider>  
    </div>
  );
}

export default App;
