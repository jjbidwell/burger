const express = require('express');
const handlebars = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

