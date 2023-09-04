const axios = require('axios');

exports.handler = async (event) => {
  const { queryStringParameters } = event;
  const apiUrl = 'https://tequila-api.kiwi.com/v2/search';

  try {
    const response = await axios.get(apiUrl, {
      params: queryStringParameters,
      headers: {
        apikey: 'LGwBSu6i6Er6b37K1HhtaodbtQqDKI24',
        accept: 'application/json',
      },
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(response.data.data),
    };
  } catch (error) {
    console.error('Error fetching flights:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ error: 'An error occurred while fetching flights' }),
    };
  }
};
