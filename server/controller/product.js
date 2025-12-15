const Product = require("../model/product")



    const productCreate = async (req, res) => {
    const { name, description, price, brand, stock, rating, discount, suppliername } = req.body;

    try {


        const ExistingUser = await User.findOne({ name: name , brand : brand , suppliername : suppliername })
      
        if (ExistingUser) {
            return res.status(400).json({ message: "username not found" })
        }

        // Nested check
        if (name) {
            if (brand) {
                if (suppliername) {
                    return res.status(400).json({
                        message: "this product already exists"
                    });
                }
            }
        }


        // numeric validations
        if (stock <= 0) {
            return res.status(400).json({ message: "Stock must be greater than 0." });
        }

        if (price <= 0) {
            return res.status(400).json({ message: "Price must be greater than 0." });
        }

        if (rating < 0 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 0 and 5." });
        }

        if (discount < 0 || discount > 100) {
            return res.status(400).json({ message: "Discount must be between 0 and 100." });
        }

        const newProduct = new Product({
            name,
            description,
            price,
            brand,
            stock,
            rating,
            discount,
            suppliername
        });

        await newProduct.save();
        return res.status(201).json({ message: "Product created", Product: newProduct });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};









// Product read api

const productCheck = async (req, res) => {

    try {

        const productId = req.params.id
        const existingItem = await Product.findById(productId)

        if (!existingItem) {
            return res.status(404).json({ message: "Item not found" })
        }
        return res.status(200).json({ product: existingItem })



    } catch (error) {

        res.status(500).json({ message: "server error" })
    }
}


// PRODUCT UPDATE API



const productUpdate = async (req, res) => {

    const productId = req.params.id
    const { name, description, price, brand, stock } = req.body

    try {

        const updateItem = await Product.findByIdAndUpdate(productId, {
            name,
            description,
            price,
            brand,
            stock,

        }, { new: true })

        if (!updateItem) {
            return res.status(400).json({ message: " product not found" })
        }

        res.json(updateItem)

    } catch (error) {

        console.error("Error fetching user data", error)
        res.status(500).json({ message: "internal server error" })
    }

}

// PRODUCT DELET API


const productDelete = async (req, res) => {

    try {

        const productId = req.params.id
        const product = await Product.findByIdAndDelete(productId)

        if (!product) {

            return res.status(400).json({ message: "product not  found " })
        }

        return res.status(200).json({ message: "Product deleted successfully ", deletedproduct: product })

    } catch (error) {
        console.error("Error fetching user data", error)
        res.status(500).json({ message: "internal server error" })
    }

}



module.exports = { productCreate, productCheck, productUpdate, productDelete }