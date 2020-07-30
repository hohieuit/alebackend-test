const express = require("express");
var bodyParser = require('body-parser')

const app = express();
const productService = require("./routers/productService.js");
var jsonParser = bodyParser.json()

app.use("/product", productService);

app.listen(4000, () => {
  console.log(`Server started on port 4000`);
});
