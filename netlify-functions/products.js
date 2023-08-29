import Product from '../model/productSchema.js';


exports.handler = async function(event, context) { 
    return { 
    statusCode: 200, 
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    },
body: JSON.stringify("Hello World")}; };

// import mongoose from 'mongoose';
// import Products from '../model/productSchema';

// exports.handler = async function(event, context) {
//     try {
//         await mongoose.connect("mongodb+srv://rajatkumar:faTttSCH5YdY2lZg@cluster0.4dl3qti.mongodb.net/", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         const allProducts = await Products.find({});
//         console.log(allProducts)
//         return {
//             statusCode: 200,
//             headers: {
//                 "Access-Control-Allow-Origin": "*",
//                 "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
//             },
//             body: JSON.stringify(allProducts) // Return products as a JSON string
//         };
//     } catch (error) {
//         console.log(error)
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: "Internal Server Error" })
//         };
        
//     }
// };
