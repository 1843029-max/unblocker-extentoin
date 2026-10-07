const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/proxy', async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing url query parameter.' });
  }

  let url;
  try {
    url = new URL(targetUrl);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid URL format.' });
  }

  try {
    const response = await axios.get(url.toString(), {
      responseType: 'text',
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      maxRedirects: 5,
    });

    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      url: url.toString(),
      content: response.data,
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    console.error('Proxy request failed:', error.message);
    res.status(502).json({
      success: false,
      error: 'Failed to fetch the requested site.',
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Unblocker proxy running on http://localhost:${PORT}`);
});
