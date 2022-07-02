const mongoose = require('mongoose');


// Products Schema
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:1,
        maxlength:15
    },
    price:{
        type:Number,
        required:true,
        minlength:1,
        maxlength:18
    },
    color:{
        type:String,
        required:true,
        minlength:1,
        maxlength:10
    },
    producttype:{
        type:String,
        required:true,
        minlength:1,
        maxlength:14
    },
    description:{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
});

module.exports = new mongoose.model('Product',ProductSchema);