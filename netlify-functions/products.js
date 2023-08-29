// import products from '../model/productSchema';
// import Products from '../model/productSchema';

// exports.handler = async function(event, context) { 

//     const productData = await products.find({})
//     console.log(productData);

//     return { 
//     statusCode: 200, 
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
//     },
// body: JSON.stringify(productData)}; };



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


const {MongoClient} = require("mongodb");
const { default: products } = require("../model/productSchema");
require('dotenv').config();

const mongoClient = new MongoClient("mongodb+srv://rajatkumar:faTttSCH5YdY2lZg@cluster0.4dl3qti.mongodb.net/")
const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db('test')
        const collection = database.collection('products')
        const results = await collection.find({}).limit(10).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return {statusCode:500, body: error.toString() };
    }
}  

module.exports = { handler }