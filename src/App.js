import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element ={<ItemListContainer greeting={"Bienvenidos a VideogamesShop"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a VideogamesShop'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
    

  );
}

export default App;
