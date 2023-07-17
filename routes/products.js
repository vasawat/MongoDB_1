const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

router.get('/', function(req,res,next){
    // Product.find((err, products) => {
    //     if (err) return next(err);
    //     res.json(products);
    // })
    Product.find({}).then(function(products){
        res.json(products);
    })
});

router.post('/', async function(req,res,next){
    // Product.create(req.body, (err, post) => {
    //     if (err) return next(err);
    //     res.json(post);
    // })
    Product.create(req.body).then(function(products) {
        res.json(products)});
});

router.get('/:id', function(req,res,next){
    Product.findById(req.params.id).then(function(products){
        res.json(products);
    })
});

router.put('/:id', function(req,res,next){
    Product.findByIdAndUpdate(req.params.id, req.body).then(function(products){
        res.json(products);
    })
});

router.delete('/:id', function(req,res,next){
    Product.findByIdAndDelete(req.params.id).then(function(products){
        res.json(products);
    })
});


module.exports = router;