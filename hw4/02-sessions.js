const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;

// Add your code here

// Use the express-session module
app.use(
  session({
    store: new session.MemoryStore(),
    secret: '8675309',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 8640000,
    },
  })
);

app.use((req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`Currently on route: ${req.url}\n\n`);

  console.log(req.session.visitedRoutes);
  if (!req.session.visitedRoutes) {
    req.session.visitedRoutes = [];
  } else {
    res.write(`Previously visited:\n`);
    for (const route of req.session.visitedRoutes) {
      res.write(`${route}\n`);
    }
    res.write(`\n`);
  }

  if (
    req.url !== '/favicon.ico' &&
    !req.session.visitedRoutes.includes(req.url)
  ) {
    req.session.visitedRoutes.push(req.url);
  }

  next();
});

app.get('/', (req, res) => {
  // Add your code here
  res.write(`Welcome to http://${req.headers.host}`);
  res.end();
});

app.get('*', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
