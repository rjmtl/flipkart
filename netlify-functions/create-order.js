const handler = async (event) => {
    try {
      console.log("......................,",event.body)
        const instance = new Razorpay({
          key_id: "rzp_test_DCXhCPT0EfIn8e",
          key_secret: "jddosmhLZDaoUPFIZJRZ0hBe",
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
        console.log(">>>>>>>>>>>>>>>>>>>>>",error)
        return {
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
        };
      }
}  

module.exports = { handler }