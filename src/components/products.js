const products = [
    {id: 1, title:'Play Station 4', description:'string', stock:5, price: 2000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_797628-MLA31063125323_062019-V.jpg'},
    {id: 2, title:'Play Station 5', description:'string', stock:5, price: 2000, pictureUrl:'https://basic-tutorials.de/wp-content/uploads/2020/09/PlayStation-5.jpg'},
    {id: 3, title:'Kingdom Hearts 3', description:'string', stock:5, price: 2000, pictureUrl:'https://images.khinsider.com/2018%20Uploads/12/KH3%20Japan%20Box%20Cover.jpg'}
  ]

export const getProducts = new Promise ((resolve)=>{
    setTimeout(()=>{
    resolve(products)
   },2000)
 });

 export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      resolve(result);
    }, 2000)
  })
  return promise
};