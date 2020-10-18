const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers/controller.js');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join('views/public/')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);



app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${ PORT}`);
  });