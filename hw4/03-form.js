const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.redirect('/form');
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// POST request
app.post('/submit', (req, res) => {
  // Add your code here
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message === '' ? 'n/a' : req.body.message;
  const newsletter = req.body.newsletter
    ? 'Yes, sign me up for the newsletter.'
    : 'No, thank you.';

  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (name === '' || email === '') {
    res.write(`<h1>Form not properly submitted</h1>`);
  } else {
    res.write(`<h1>Form data</h1>`);
  }
  res.write(`<p>Name: ${name}</p>`);
  res.write(`<p>Email: ${email}</p>`);
  res.write(`<p>Comments: ${message}</p>`);
  res.write(`<p>Newsletter: ${newsletter}</p>`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
