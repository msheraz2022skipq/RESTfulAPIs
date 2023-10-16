

//import the productService
const productService = require('./productsService')


const getProducts = (done) => {
   productService.getProducts(done)

}

const getProductById = (productId, done) => {
   productService.getProductById(productId,done)

}

const saveProductDetails = (productDetails, done) => {
  productService.saveProductDetails(productDetails,done)

}


 const deleteProductById = (productId, done) => {
   productService.deleteProductById(productId,done)
  
 }

module.exports = {
  getProducts, getProductById, saveProductDetails, deleteProductById
}
