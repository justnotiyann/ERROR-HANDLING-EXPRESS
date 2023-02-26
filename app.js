const express = require("express");
const { BadRequest, NotFound, Unauthorized } = require("./errors");
const ErrorHandling = require("./middleware/error-handling");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing routes bad request
app.get("/bad", (req, res, next) => {
  throw new BadRequest("Bad Request mas bro");
});

// testing routes not found
app.get("/not", (req, res, next) => {
  throw new NotFound("Not Found mas bro");
});

// testing routes unauthorized
app.get("/un", (req, res, next) => {
  throw new Unauthorized("Unauthorized mas bro");
});

// Routes yang akan digunakan untuk display error
app.use(ErrorHandling);

app.listen(port, () => console.log(`express running at port ${port}`));
