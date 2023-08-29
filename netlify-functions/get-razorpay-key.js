exports.handler = async function(event, context) { return { statusCode: 200, 
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    },
body: JSON.stringify({ key: process.env.RAZORPAY_KEY_ID }) }; };