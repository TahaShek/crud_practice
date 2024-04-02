const Product = require("../models/product.model")
const { validationResult } = require("express-validator");

const getProducts=async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }


   const getProductByid=async(req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product){
       return     res.status(404).json({ message:'not product found' });
        }
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
   } 

   const createProduct=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
              success: false,
              errors: errors.array(),
            });
          }
        const product = await Product.create(req.body);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
   }

const updateProduct=async(req,res)=>{
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);
        if (!products) {
          return res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          return res.status(404).json({ message: "Product not found " });
        }
        res.status(200).json({ message: "Product deleted" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
    module.exports={getProducts,getProductByid,createProduct,updateProduct,deleteProduct}
