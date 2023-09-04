const axios = require('axios');
const querystring = require('querystring');

exports.handler = async (event) => {
  try {
    const requestBody = querystring.stringify(event.queryStringParameters);

    const response = await axios.get('https://tequila-api.kiwi.com/v2/search', {
      params: requestBody,
      headers: {
        apikey: 'LGwBSu6i6Er6b37K1HhtaodbtQqDKI24',
        accept: 'application/json',
      },
    });

    const responseBody = JSON.stringify(response.data.data);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: responseBody,
    };
  } catch (error) {
    console.error('Error fetching flights:', error);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'An error occurred while fetching flights' }),
    };
  }
};