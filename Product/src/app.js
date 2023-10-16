//Import the necessary dependencies
const http = require('http')
const {getProducts,getProductsById,saveProduct,updateProduct,deleteProduct} = require('./productsService')
// Define a prot at which the server will run
const PORT = process.env.PORT || 5000

const productsService = require("./productsService");
const getRequestData = require('./utils');

const server = http.createServer(async (req, res) => {
  // Get all products
  if (req.url === '/api/v1/product' && req.method === 'GET') {
    res.writeHead(200, {
        'content-type': 'application/json'
    })
    res.end(getProducts())
}

  // Get a product with specified id
  else if (req.url.match(/\/api\/v1\/product\/([0-9])/) && req.method==='GET'){
        const id = req.url.split('/')[4]
        res.writeHead(200, {
          'content-type': 'application/json'
      })
      res.end(getProductsById(parseInt(id), (err,res)=>{
        if (err){
          return err
        }
        return res
      }))

    }
  // Create a new product
  else if (req.url === '/api/v1/product' && req.method === 'POST') {
    let req_body = await getRequestData(req)
    res.writeHead(201, {
        'content-type': 'application/json'
    })
    res.end(saveProduct(JSON.parse(req_body), (err,result)=>{
      if (err){
        return err
      }
      return result
    }))
}
  // Update a specific product
  else if (req.url.match(/\/api\/v1\/product\/([0-9])/) && req.method==='PUT'){
    const id = req.url.split('/')[4]
    let req_body = await getRequestData(req)
    res.writeHead(200, {
      'content-type': 'application/json'
  })
  res.end(updateProduct(parseInt(id),JSON.parse(req_body), (err,result)=>{
    if (err){
      return err
    }
    return result
  }))

}
  // Delete a specific Product

  else if (req.url.match(/\/api\/v1\/product\/([0-9])/) && req.method==='DELETE'){
    const id = req.url.split('/')[4]
    
        res.writeHead(200,{
            'content-type':'application/json'
        })
        res.end(deleteProduct(parseInt(id),(err,result)=>{
          if (err){
            return err
          }
          return result
        }))
    
}

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})