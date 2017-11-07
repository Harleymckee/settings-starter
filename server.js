const express = require("express");
const fs = require("fs");
const url = require('url');
const app = express();

app.set("port", process.env.PORT || 3005);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.set('view engine', 'pug')

app.get('/*', function (req, res) {
  res.render('index', {path: req.originalUrl})
})

app.get('/login', function (req, res) {
  res.render('login')
})

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});