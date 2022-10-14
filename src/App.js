import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import cartContext from './context/cartContext'
import { useEffect } from 'react';
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'


function App() {
  useEffect(()=>{
    const db = getFirestore()

    const itemReference = doc(db, 'items', 'WMmuSPimZ9DeTQaAnvSy')

    getDoc(itemReference)
      .then((snapshot) =>{
        if(snapshot.exists()){
          const item ={
            id: snapshot.id,
            ...snapshot.data()
          };
          console.log(item);
        }
      })
      .catch(error => console.warn(error))

  }, [])

  useEffect(()=>{
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');
    getDocs(itemsCollection)
      .then((snapshot) =>{
        const list = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
        console.log(list)
      })
  })

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element ={<ItemListContainer greeting={"Bienvenidos a VideogamesShop"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a VideogamesShop'} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      
    </BrowserRouter>
    <cartContext.Provider value={[]}>
    </cartContext.Provider> 
    </>
    

  );
}

export default App;
