import Razorpay from "razorpay";

const handler = async (event) => {
    try {
        const instance = new Razorpay({
          key_id: "rzp_test_DCXhCPT0EfIn8e",
          key_secret: "jddosmhLZDaoUPFIZJRZ0hBe",
        });
        const options = {
          amount: "100",
          currency: 'INR',
        };
        
        // Create an order using async/await
        const order = await instance.orders.create(options);
    
        if (!order) {
          return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Some error occurred' }),
            headers: {
              "Access-Control-Allow-Origin": "*",

          },
          };
        }
    
        return {
          statusCode: 200,
          body: JSON.stringify({message: "Payment Successfull"}),
          headers: {
            "Access-Control-Allow-Origin": "*",
        },
        };
      } catch (error) {
        console.log(">>>>>>>>>>>>>>>>>>>>>",error)
        return {
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
          headers: {
            "Access-Control-Allow-Origin": "*",
        },
        };
      }
}  

module.exports = { handler }