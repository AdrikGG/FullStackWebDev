const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const formData = {
  name: "",
  email: "",
  message: "n/a",
  newsletter: "No, thank you",
};

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname + "/03-form.html"));
});

app.post("/submit", (req, res) => {
  formData.name = req.body.name;
  formData.email = req.body.email;
  formData.message = req.body.message === "" ? "n/a" : req.body.message;
  formData.newsletter = req.body.newsletter
    ? "Yes, sign me up for the newsletter"
    : "No, thank you";
  res.writeHead(200, { "Content-Type": "text/html" });
  if (formData.name === "" || formData.email === "") {
    res.write(`<h1>Form not properly submitted</h1>`);
  } else {
    res.write(`<h1>Form data</h1>`);
  }
  res.write(`<p>Name: ${formData.name}</p>`);
  res.write(`<p>Email: ${formData.email}</p>`);
  res.write(`<p>Comments: ${formData.message}</p>`);
  res.write(`<p>Newsletter: ${formData.newsletter}</p>`);
  return res.end();
});

app.get("/submit", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (formData.name === "" || formData.email === "") {
    res.write(`<h1>Form not properly submitted</h1>`);
  } else {
    res.write(`<h1>Form data</h1>`);
  }
  res.write(`<p>Name: ${formData.name}</p>`);
  res.write(`<p>Email: ${formData.email}</p>`);
  res.write(`<p>Comments: ${formData.message}</p>`);
  res.write(`<p>Newsletter: ${formData.newsletter}</p>`);
  return res.end();
});

app.get("/", (req, res) => {
  res.redirect("/form");
});

app.use((req, res, next) => {
  const error = new Error("Page not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.write(`<h1>${error.status} - ${error.message}</h1>`);
  return res.end();
});

app.listen(port);
