// import Product from '../model/productSchema.js';


// exports.handler = async function(event, context) { 
//     // console.log(event,context)
//     const products = await Product.find({});  
//     console.log(products)  
//     return { 
//     statusCode: 200, 
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
//     },
// body: products}; };

import mongoose from 'mongoose';
import products from '../model/productSchema';

exports.handler = async function(event, context) {
    try {
        // Connect to the MongoDB database (if not already connected)
        await mongoose.connect("mongodb+srv://rajatkumar:faTttSCH5YdY2lZg@cluster0.4dl3qti.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Fetch products from the database
        const allProducts = await products.find({});
        console.log(allProducts)
        // Close the database connection
        mongoose.connection.close();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
            },
            body: JSON.stringify(allProducts) // Return products as a JSON string
        };
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
        
    }
};
