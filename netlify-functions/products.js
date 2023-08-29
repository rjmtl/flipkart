import Product from '../model/productSchema.js';


exports.handler = async function(event, context) { 
    // console.log(event,context)
    const products = await Product.find({});  
    console.log(products)  
    return { 
    statusCode: 200, 
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    },
body: products}; };