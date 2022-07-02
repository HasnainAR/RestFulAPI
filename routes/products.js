const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

//Post : create new product
router.post('/',(req,res) => {

    product = new Product({

        name:req.body.productName,
        price:req.body.price,
        color:req.body.color,
        producttype:req.body.producttype,
        description:req.body.description,



    });
    product.save().then(product =>{
        res.send(product);
    }).catch(error => {
        res.status(500).send("Product not added")
    });
});
// get all products
router.get("/",(req,res) =>{
    Product.find().then((products) => res.send(products))
    .catch((error) => {
        res.status(500).send("Something went wrong");
    });
});
router.get("/:productId", async (req, res) => {
    const product = await Product.findById(req.params.productId);

    
    if(!product) 
    res.status(404).send("Product not found");
    else
    res.send(product);
    
});
//Update product based on ID
router.put('/:productId', async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId,
        {
        name: req.body.productName,
        price: req.body.price,
        color: req.body.color,
        producttype: req.body.producttype,
        description: req.body.description,



    },
    { new: true});
    if(!updatedProduct) 
    res.status(404).send("Product not found");
    else
    res.send(updatedProduct);
});


module.exports = router;


