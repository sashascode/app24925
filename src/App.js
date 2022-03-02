import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Slider from './components/Slider/Slider';
import {CartContext} from './context/CartContext';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';
import Cart from './components/Cart/Cart';

function App() {
  

  return (
    <div className="App">
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
        </Routes>
      </BrowserRouter>
    </CartContext>
    </div>
  );
}

export default App;
