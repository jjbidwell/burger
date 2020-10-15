const express = require('express');
const handlebars = require('express-handlebars');
const orm = require("./config/orm");

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('*', (req, res) => {
    res.send('<h1>cheemsburbger</h1>');
});

app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${ PORT}`);
  });