

//import the DAO layer
const productDAO = require('./productDao')


const getProducts = function(done){
  productDAO.getProducts(done)
  
}

const getProductById = function(id, done){
  productDAO.getProductById(id,done)
 
}
const saveProductDetails = function(productDetails, done){
  productDAO.saveProductDetails(productDetails,done)
}


const deleteProductById = (productId, done) => {
productDAO.deleteProductById(productId,done)
}



module.exports = {
  getProducts, getProductById,saveProductDetails, deleteProductById
}
