const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var products = [
  {
    id: uuidv4(),
    name: "iphone X",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    beforeSale: 5000,
    afterSale: 4000,
  },
  {
    id: uuidv4(),
    name: "iphone X",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    beforeSale: 5000,
    afterSale: 4000,
  },
  {
    id: uuidv4(),
    name: "iphone X",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    beforeSale: 5000,
    afterSale: 4000,
  },
  {
    id: uuidv4(),
    name: "iphone X",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    beforeSale: 5000,
    afterSale: 4000,
  },
];

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:id", (req, res) => {
  console.log(`get prod by id ${req.params.id}`);
  var prod = products.find((product) => product.id == req.params.id);
  res.send(prod);
});

router.delete("/:id", (req, res) => {
  products = products.filter((product) => product.id != req.params.id);
  res.send(products);
});

router.post("/",jsonParser, (req, res) => {
    console.log(req.body);
  var prod = req.body;
  var position = -1;
  if (!prod.id) {
    prod.id = uuidv4();
  }

  products.forEach((product, index) => {
    if ((prod.id = product.id)) {
      position = index;
    }
  });

  if (position != -1) {
    products[position] = prod;
  } else {
    products.push(prod);
  }
  res.send(prod);
});

module.exports = router;
