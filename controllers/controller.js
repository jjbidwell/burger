const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

function displayBurgers(result){
    result.forEach(element => {
        if(element.devoured === 0){
            notEatenArray.push(element);
        } else {
            eatenArray.push(element);
        }
    });

}
router.get('/', (req, res) => {
    notEatenArray = [];
    eatenArray = [];
    burger.all((data) => {
      console.log(data)
    });
   // orm.selectAll(['burger_name', 'devoured'], 'burgers', displayBurgers);
    res.render('index', {not_eaten: notEatenArray, eaten: eatenArray});
});

router.post('/', (req, res) => {
    //console.log(req.body.burger_input);
    orm.postTo('burgers', 'burger_name', req.body.burger_input);
    res.redirect('/')
});



  module.exports = router;