const {MongoClient} = require("mongodb");

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
        console.log(">>>>>>>>>>>>>>>>>>>")
        return {statusCode:500, body: error.toString() };
    }
}  

module.exports = { handler }