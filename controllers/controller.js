const express = require('express');
const burger = require('../models/burger');
require = ('console.table');

const router = express.Router();

router.get('/', (req, res) => {
    notEatenArray = [];
    eatenArray = [];
    burger.all((data) => {
      data.forEach(element => {
          if(element.devoured === 1){
              eatenArray.push(element);
          } else {
              notEatenArray.push(element);
          }
      })
      res.render('index', {not_eaten: notEatenArray, eaten: eatenArray});
    });
});

router.post('/', (req, res) => {
    burger.create(req.body.burger_input, (err, res) => {
        if (err) throw err;
    })
   console.log(res);
    res.redirect('/')
});



  module.exports = router;