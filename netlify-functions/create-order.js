const {MongoClient} = require("mongodb");

const mongoClient = new MongoClient("mongodb+srv://rajatkumar:faTttSCH5YdY2lZg@cluster0.4dl3qti.mongodb.net/")
const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const instance = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
        const options = {
          amount: event.body.price,
          currency: 'INR',
        };
        
        // Create an order using async/await
        const order = await instance.orders.create(options);
    
        if (!order) {
          return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Some error occurred' }),
          };
        }
    
        return {
          statusCode: 200,
          body: JSON.stringify(order),
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
        };
      }
}  

module.exports = { handler }