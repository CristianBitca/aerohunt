const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Fetch flights route
app.get('/flights', async (req, res) => {
  try {
    const response = await axios.get('https://tequila-api.kiwi.com/v2/search', {
      params: req.query,
      headers: {
        apikey: 'LGwBSu6i6Er6b37K1HhtaodbtQqDKI24',
        accept: 'application/json',
      },
    });

    res.status(200).json(response.data.data);
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'An error occurred while fetching flights' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
