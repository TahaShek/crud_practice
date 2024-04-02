const {body}=require("express-validator")

 const validatedProduct = [
    body("name")

    .trim()
    .isEmpty()
    .exists({ checkFalsy: true })
    .withMessage("it can not be empty")
]

module.exports = {validatedProduct}