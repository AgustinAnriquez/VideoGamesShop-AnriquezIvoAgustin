import {collection, getDocs, getFirestore, doc, getDoc, query, where} from 'firebase/firestore'


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