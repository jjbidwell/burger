const express = require('express');
const exphbs = require('express-handlebars');
const { selectAll } = require('./config/orm');
const orm = require("./config/orm");

const app = express();
app.use(express.static(__dirname + '/assets'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let notEatenArray = [];
let eatenArray = [];

const PORT = process.env.PORT || 8080;

function displayBurgers(result){
    result.forEach(element => {
        if(element.devoured === 0){
            notEatenArray.push(element);
        } else {
            eatenArray.push(element);
        }
    });
}

app.get('/', (req, res) => {
    notEatenArray = [];
    eatenArray = [];
    orm.selectAll(['burger_name', 'devoured'], 'burgers', displayBurgers);
    res.render('index', {not_eaten: notEatenArray, eaten: eatenArray});
});

app.post('/', (req, res) => {
    //console.log(req.body.burger_input);
    orm.postTo('burgers', 'burger_name', req.body.burger_input);
    res.redirect('/')
});

app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${ PORT}`);
  });