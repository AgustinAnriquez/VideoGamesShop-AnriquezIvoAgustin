const products = [
    {id: 1, categoryId: 1, title:'Play Station 4', description:'Con tu consola PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. ', stock:5, price: 2000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_797628-MLA31063125323_062019-V.jpg'},
    {id: 2, categoryId: 1, title:'Play Station 5', description:'PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.', stock:5, price: 2000, pictureUrl:'https://basic-tutorials.de/wp-content/uploads/2020/09/PlayStation-5.jpg'},
    {id: 3, categoryId: 2, title:'Kingdom Hearts 3', description:'Con este juego de Kingdom Hearts vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer', stock:5, price: 2000, pictureUrl:'https://images.khinsider.com/2018%20Uploads/12/KH3%20Japan%20Box%20Cover.jpg'}
  ]

export const getProducts = () =>{
  const promise = new Promise ((resolve)=>{
    setTimeout(()=>{
    resolve(products)
   },2000)
 })
 return promise
}
  
export const getProductsByCategory = (categoryId) =>{
  const promise = new Promise ((resolve)=>{
    const results = products.filter((product) => product.categoryId === parseInt(categoryId))
    setTimeout(()=>{
    resolve(results)
   },2000)
 })
 return promise
}

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      resolve(result);
    }, 2000)
  })
  return promise
};