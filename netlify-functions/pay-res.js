exports.handler = async function(event, context) { return { statusCode: 200, 
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    },
body: JSON.stringify({ message: 'Payment response endpoint' }) }; };