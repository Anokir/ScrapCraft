const express = require('express');
const app = express();
const scraper = require('./scraper');

app.get('/scrape', (req, res) => {
  const url = req.body.url;
  scraper.run(url)
   .then(data => res.json(data))
   .catch(error => res.status(500).json({ error: 'Failed to scrape data' }));
});

app.listen(3000, () => console.log('Server listening on port 3000'));