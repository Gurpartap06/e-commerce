const productController = require("../controller/product")

const express = require("express")

const productRouter = express.Router()

productRouter.post("/productCreate", productController.productCreate)

productRouter.get("/productCheck/:id", productController.productCheck)

productRouter.put("/productUpdate/:id", productController.productUpdate)

productRouter.delete("/productDelete/:id", productController.productDelete)


module.exports = productRouter