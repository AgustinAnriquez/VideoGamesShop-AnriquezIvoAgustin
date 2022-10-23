import {collection, getFirestore, addDoc} from 'firebase/firestore'

export const createOrder = (newOrder) =>{
    const db = getFirestore()

    const ordersCollection = collection(db, "orders")

    return addDoc(ordersCollection, newOrder)
    .then((snapshot) =>snapshot.id)
    .catch(error => console.warn(error))
}