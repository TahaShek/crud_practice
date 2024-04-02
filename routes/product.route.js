const express = require('express');
const router = express.Router()
const {validatedProduct}=require('../validator/product.validator')
const {getProducts,createProduct,getProductByid,updateProduct,deleteProduct}=require('../controller/product.controller')


router.get('/',getProducts);
router.get('/:id',getProductByid);
router.post('/',validatedProduct,createProduct);
// router.route('/').post(validatedProduct,createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

// route.route('/').post(**validateUser**, createUser);
// 
module.exports = router;