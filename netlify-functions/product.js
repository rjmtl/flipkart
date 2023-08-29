exports.handler = async function(event, context) { const id = event.path.split('/').pop(); return { statusCode: 200, 
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    },
body: JSON.stringify({ message: `Product with ID: ${id}` }) }; };