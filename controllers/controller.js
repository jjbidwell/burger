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

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger_input, () => {        
    })
    res.redirect('/');
});

router.put('/api/burgers/:id', (req, res) => {
    burger.eat(req.params.id, () => {
    })
    console.log(res);
    res.redirect('/')
});

router.delete('/api/burgers/:id', (req, res) => {
    burger.delete(req.params.id, (err) => {

        res.redirect('/')
    });
})


  module.exports = router;