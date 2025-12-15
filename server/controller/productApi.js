const ProductApi = require("../model/productApi")


const productCreate = async (req, res) => {
  const { brand, description, price, oldPrice } = req.body;

  try {
    // check duplicate
    const existingProduct = await ProductApi.findOne({ brand, description, price, oldPrice });
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }

    if (!brand || !description || !price || !oldPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new ProductApi({ brand, description, price, oldPrice });
    await newProduct.save();

    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET PRODUCT BY ID
const productCheck = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductApi.findById(productId);

    if (!product) 
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ product });
  } catch (error) {
    console.error("Error reading product:", error);
    res.status(500).json({ message: "Server error" });
  }
};




// UPDATE PRODUCT
const updatedProduct = async (req, res) => {
  const productId = req.params.id;
  const { brand, description, price, oldPrice } = req.body;

  try {
    const updatedProduct = await ProductApi.findByIdAndUpdate(
      productId,
      { brand, description, price, oldPrice },
      { new: true }
    );

    if (!updatedProduct){
       return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



// DELETE PRODUCT
const productDelete = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await ProductApi.findByIdAndDelete(productId);

    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



const getAll = async (req, res) => {
  try {
    const product = await ProductApi.find()
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



const uploadAvatar = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductApi.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "user not found" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    product.avatar = req.file.originalname;
    await product.save();
    res.json({ message: "avatar image uploaded succesfully" })
  } catch (error) {
    console.error("Error uploading avatar image :", error);
    res.status(500).json({ message: "Internal server Error" });

  }
};

const searchByBrand = async (req, res) => {
  try {
    const { brand } = req.query;

    if (!brand) {
      return res.status(400).json({
        success: false,
        message: "brand query is required"
      });
    }

    const products = await ProductApi.find({
      brand: {
        $regex: `^${brand}`, // starts with brand
        $options: "i"        // case-insensitive
      }
    });

    res.status(200).json({
      success: true,
      total: products.length,
      products
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};











module.exports = {
  productCreate,
  productCheck,
  updatedProduct,
  productDelete,
  getAll,
  uploadAvatar,
  searchByBrand,
};