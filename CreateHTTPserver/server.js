const http = require('http')
const PORT = process.eventNames.PORT || 5000

const server = http.createServer((request, response)=>{
    response.writeHead(200,{
        "content-type":"text/plain"
    })
    response.end('Hello')
})

server.listen(PORT,()=>{
    console.log("Server is ready and running on Port ", PORT);
})

server.on('error', (error)=>{
    if(error.code="EADRINUSE"){
        console.log('Port already in use..');
    }
})
