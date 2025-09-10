const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const response = await fetch('https://api.countapi.xyz/hit/lamiradadetualma-web/visits');
    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ value: data.value }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};