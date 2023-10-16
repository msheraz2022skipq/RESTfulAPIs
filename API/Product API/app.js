

const express = require('express')

const config = require("./config");
const app = express();
const productsRouter = require("./src");
const LoggerMiddleware = (req,res,next)=>{
  console.log(`Logged ${req.url} ${req.method}`);
  next()
}


app.use(LoggerMiddleware)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/products", productsRouter);
app.use((req,res,next)=>{
  res.status(400).send("Resourse not found...")
})


const server = app.listen(config.PORT, () => {
  console.log('Listening on port', config.PORT);
});

module.exports = server;
