const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here

app.get('/', (req, res) => {
  // render pug template for the index.html file

  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

app.get('/capitals', async (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  let countries = [];
  await axios
    .get(url)
    .then((fetchRes) => {
      fetchRes.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      for (const country of fetchRes.data) {
        countries.push(
          `${country.name.common} - 
          ${country.capital ? country.capital : 'N/A'}`
        );
      }
      res.render('page', {
        heading: 'Countries and Capitals',
        results: countries,
      });
    })
    .catch((err) => {
      res.render('page', {
        heading: 'Countries and Capitals',
        results: err,
      });
    });
});

app.get('/populous', async (req, res) => {
  // filter the output array for the countries with population of 50 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  let populous = [];
  await axios
    .get(url)
    .then((fetchRes) => {
      fetchRes.data.sort((a, b) =>
        a.population < b.population ? 1 : a.population > b.population ? -1 : 0
      );
      for (const country of fetchRes.data) {
        if (country.population >= 50000000) {
          populous.push(
            `${country.name.common} - 
            ${country.population.toLocaleString('en-us')}`
          );
        }
      }
      res.render('page', {
        heading: 'Most Populous Countries',
        results: populous,
      });
    })
    .catch((err) => {
      res.render('page', {
        heading: 'Most Populous Countries',
        results: err,
      });
    });
});

app.get('/regions', async (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  let regions = {};
  let regionsRes = [];
  await axios
    .get(url)
    .then((fetchRes) => {
      for (const country of fetchRes.data) {
        if (regions[country.region]) {
          regions[country.region]++;
        } else {
          regions[country.region] = 1;
        }
      }
      for (const region in regions) {
        regionsRes.push(`${region} - ${regions[region]}`);
      }
      res.render('page', {
        heading: 'Regions of the World',
        results: regionsRes,
      });
    })
    .catch((err) => {
      res.render('page', {
        heading: 'Regions of the World',
        results: err,
      });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
