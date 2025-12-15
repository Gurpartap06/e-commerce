const express = require ("express")
const productController = require("../controller/productApi");
const multer = require ("multer")


const productApiRouter = express.Router();

productApiRouter.post("/productCreate", productController.productCreate);

productApiRouter.get("/productCheck/:id", productController.productCheck);

productApiRouter.patch("/updatedProduct/:id", productController.updatedProduct);

productApiRouter.delete("/productDelete/:id", productController.productDelete);

productApiRouter.get("/getAll" , productController.getAll)


productApiRouter.get("/searchbybrand" , productController.searchByBrand)


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assests/images");
  },
  filename: (req, file, cb) => {
    
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

productApiRouter.post("/upload-avatar/:id",upload.single("avatar"),productController.uploadAvatar);








module.exports = productApiRouter;
    