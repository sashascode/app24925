import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
     <NavBar brandName1="i" brandName2="Store" />
     <ItemListContainer/>
    </div>
  );
}

export default App;
