const express = require('express')
const mongoose = require('mongoose');
const Product= require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');
const app=express()


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* app.listen(3000,()=>{
    console.log("Server is running on port 3000")
}); */


//routes
app.use('/api/products',productRoute);

app.get('/', (req,res)=>{
    res.send("Hello from node API");
});

//getProducts
//getProduct
//createProduct
//updateProduct
//deleteProduct

mongoose.connect("mongodb+srv://ayushbhat0518:ayushbhat0518@cluster0.7xhql4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to database!")
    app.listen(3000,()=>{
        console.log("Server is running on port 3000")
    });
})
.catch(()=>{
    console.log("Connection failed!")
})