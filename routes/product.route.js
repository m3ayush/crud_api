const express=require("express");
const Product = require("../models/product.model");
const route= express.Router()
const {getProducts} = require('../controllers/product.controller');

route.get('/', getProducts);
route.get('/:id', )