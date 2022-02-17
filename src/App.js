import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar brandName1="i" brandName2="Store" />
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
