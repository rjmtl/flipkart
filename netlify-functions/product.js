const {MongoClient} = require("mongodb");

const mongoClient = new MongoClient("mongodb+srv://rajatkumar:faTttSCH5YdY2lZg@cluster0.4dl3qti.mongodb.net/")
const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const id = event.path.split('/').pop(); 
        const database = (await clientPromise).db('test')
        const collection = database.collection('products')
        const results = await collection.find({id:id});
        return {
            statusCode: 200,
            body: JSON.stringify(results),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
            },
        }
    } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>>>",error)
        return {statusCode:500, body: error.toString() };
    }
}  

module.exports = { handler }