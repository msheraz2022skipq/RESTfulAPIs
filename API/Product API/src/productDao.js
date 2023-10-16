
//import fs module
const fs = require('fs')




//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function(done){
    

  fs.readFile('src/products.json', (err, fileContent) => {
    if (err) {
        return done("Error occured while reading the file");
    }
    let productsData = JSON.parse(fileContent);
    return done(undefined, productsData);
})
       
}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(id,done){
  fs.readFile('src/products.json',(err,fileContent)=>{
    if (err){
        return done("Error occured while reading the file")
    }
    let productsData = JSON.parse(fileContent)
    const fetchProduct = productsData.filter(prod => parseInt(prod.id)===parseInt(id))
    if (fetchProduct.length===0){
        return done('No product for requested ID')
    }
    return done(undefined,fetchProduct[0])
})
      
}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
      
  //Write the productData into the file 
     
  //return the callback with undefined and ProductDetails

  fs.readFile('src/products.json',(err,fileContent)=>{
    if (err){
        return done("Error occured while reading the file")
    }
    let productsData = JSON.parse(fileContent)
    const fetchProduct = productsData.filter(prod => parseInt(prod.id)===parseInt(ProductDetails.id))
    if (fetchProduct.length!==0){
        return done('Product already exists with this id')
    }
    productsData.push(ProductDetails)
    fs.writeFile('src/products.json', JSON.stringify(productsData), (err,updatedContent)=>{
      if(err){
          return done("ERROR occured while writing the file...")
      }
      return done(undefined, "Created")
  })
})
     
    
  }

  //The method deleteProductById will take productId and done as parameters
  //It will read the product.json file

  const deleteProductById = function(productId, done){
    
    fs.readFile('src/products.json',(err,fileContent)=>{
      if (err){
          return done("Error occured while reading the file")
      }
      let productsData = JSON.parse(fileContent)
      const fetchProduct = productsData.filter(prod => parseInt(prod.id)===parseInt(productId))
      if (fetchProduct.length===0){
          return done('No product exists with this id')
      }
      let index = productsData.indexOf(fetchProduct)
      productsData.splice(index,1)
      fs.writeFile('src/products.json', JSON.stringify(productsData), (err,updatedContent)=>{
        if(err){
            return done("ERROR occured while writing the file...")
        }
        return done(undefined, "Succefully deleted the product details...")
    })
  })

  }


module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
    
}