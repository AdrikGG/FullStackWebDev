const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Add your code here

app.get('/', (req, res) => {});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
