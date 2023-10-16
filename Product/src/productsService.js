// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products;


const getProducts = () => {
  try {
    return JSON.stringify(productsList)
  } catch (error) {
    console.log(error);
  }
}

const getProductsById = (productId, done) => {
  let product = null

  productsList.filter(p => {
    if (p.id == productId) {
      product = p
    }
  })
  if (product === null) {
    //return error
    return done("Requested product doesn't exist..!")
  }
  return done(null, JSON.stringify(product));
}

const saveProduct = (newProduct, done) => {
  // save a product
  let found = null
  productsList.filter(element => {
    if (element.id === newProduct.id) {
      found = element.id
    }
  })
  if (found) {
    return done("Product already exists..!")
  }
  productsList.push(newProduct)
  return done(null, JSON.stringify(productsList));
}

const updateProduct = (productId, updateData, done) => {
  let updatedProductList = null;
  let found = null;
  updatedProductList = productsList.map(element => {
    if (element.id === productId) {
      found = element;
      return {
        "id": productId,
        "name": updateData.name,
        "description": updateData.description,
        "price": updateData.price,
        "quantity": updateData.quantity
      }

    }
    else {
      return element
    }
  });
  if (!found) {
    return done('Requested product doesn\'t exist..!')
  }
  return done(null, JSON.stringify(updatedProductList));
}

const deleteProduct = (productId, done) => {
  const product = productsList.find(p => p.id === productId)
  if (!product) {
    return done('Requested product doesn\'t exist..!')
  }
  const index = productsList.indexOf(product)
  productsList.splice(index, 1)
  return done(null, JSON.stringify(productsList));
}

console.log(getProducts());

module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}