const mongoose = require('mongoose')
const ProductScheema=mongoose.Schema(

    {
        name:{
            type:String,
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        image:{
            type:String,
            required:false,
        },
    },
    {
        timestamps:true
    }

)
const Product = mongoose.model("Product", ProductScheema)

module.exports=Product