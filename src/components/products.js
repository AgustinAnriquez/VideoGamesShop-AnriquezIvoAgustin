import {collection, addDoc, getDocs, getFirestore, doc, getDoc, query, where} from 'firebase/firestore'

const products = [
  {categoryId: 1, title:'Play Station 5', description:'PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.', stock:5, price: 2000, pictureUrl:'https://basic-tutorials.de/wp-content/uploads/2020/09/PlayStation-5.jpg'},
  {categoryId: 2, title:'Kingdom Hearts 3', description:'Con este juego de Kingdom Hearts vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer', stock:5, price: 2000, pictureUrl:'https://images.khinsider.com/2018%20Uploads/12/KH3%20Japan%20Box%20Cover.jpg'}
]

export const getProducts = () =>{
  const db = getFirestore();
  const itemsCollection = collection(db, 'items');

  return getDocs(itemsCollection)
  .then((snapshot) =>{
    const list = snapshot
      .docs
      .map((doc)=>({
        id: doc.id, 
        ...doc.data()
      }))
      return list
  })
  .catch(error => console.warn(error))
}
  
export const getProductsByCategory = (categoryId) =>{
  const db = getFirestore();
  const itemsCollection = collection(db, 'items');
  const itemsQuery = query(itemsCollection, where('categoryId', '==', parseInt(categoryId)))

  return getDocs(itemsQuery)
  .then((snapshot) =>{
    const list = snapshot
      .docs
      .map((doc)=>({
        id: doc.id, 
        ...doc.data()
      }))
      return list
  })
  .catch(error => console.warn(error))
}

export const getProduct = (id) => {
  const db = getFirestore()

  const itemReference = doc(db, 'items', id)

  return getDoc(itemReference)
    .then((snapshot) =>{
      if(snapshot.exists()){
        const item ={
          id: snapshot.id,
          ...snapshot.data()
        };
        return item
      }
    })
    .catch(error => console.warn(error))
};

export const createAllProducts = async () =>{
  try{

    const db = getFirestore()
    const ordersCollection = collection(db, "items")

    for(let i = 0; i < products.length; i++){
      const snapshot = await addDoc(ordersCollection, products[i])
    }

    
  }catch(error){
    console.warn(error)
  }
}