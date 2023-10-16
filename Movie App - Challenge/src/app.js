// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = process.env.PORT || 5000

// Define the server
const server = http.createServer(async (req, res) => {
  // Get all movies
  if (req.url === '/api/v1/movies' && req.method === 'GET') {
    res.writeHead(200, {
        'content-type': 'application/json'
    })
    res.end(moviesService.getMovies())
}
  // Get a movie with specified id

  else if (req.url.match(/\/api\/v1\/movies\/([0-9])/) && req.method==='GET'){
    const id = req.url.split('/')[4]
    res.writeHead(200, {
      'content-type': 'application/json'
  })
  res.end(moviesService.getMoviesById(parseInt(id), (err,res)=>{
    if (err){
      return err
    }
    return res
  }))

}
  // Save movie details
  else if (req.url === '/api/v1/movies' && req.method === 'POST') {
    let req_body = await getRequestData(req)
    res.writeHead(201, {
        'content-type': 'application/json'
    })
    res.end(moviesService.saveMovie(JSON.parse(req_body), (err,result)=>{
      if (err){
        return err
      }
      return result
    }))
}

  // Update a specific movie

  else if (req.url.match(/\/api\/v1\/movies\/([0-9])/) && req.method==='PUT'){
    const id = req.url.split('/')[4]
    let req_body = await getRequestData(req)
    res.writeHead(200, {
      'content-type': 'application/json'
  })
  res.end(moviesService.updateMovie(parseInt(id),JSON.parse(req_body), (err,result)=>{
    if (err){
      return err
    }
    return result
  }))
}

  // Delete a specific movie
  else if (req.url.match(/\/api\/v1\/movies\/([0-9])/) && req.method==='DELETE'){
    const id = req.url.split('/')[4]
    
        res.writeHead(200,{
            'content-type':'application/json'
        })
        res.end(moviesService.deleteMovieById(parseInt(id),(err,result)=>{
          if (err){
            return err
          }
          return result
        }))
}
  // If no route present capture in the else part
  else{
    res.writeHead(200,{
      'content-type':'application/json'
  })
  res.end("Incorrect URL or method...")
  }
});
// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
server.on("error", (error) => {
  if (error.code === "EADRINUSE") {
    console.log("Port already in use");
  }
});
