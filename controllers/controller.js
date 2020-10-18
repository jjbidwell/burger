const express = require('express');
const burger = require('../models/burger');
require = ('console.table');

const app = express();

app.get('/', (req, res) => {

    burger.all((data) => {
        res.render('index', {burgers: data});
    });
});

app.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger_input, () => {        
    })
    res.redirect('/');
});

app.put('/api/burgers/:id', (req, res) => {
    burger.eat(req.params.id, () => {
    })
    res.redirect('/')
});

// app.put('/api/burgers/:id', (req, res) => {
    
//     console.log(req.params.id)
//     //const burgerId = parseInt(req.params.id)
//     //console.log(typeof burgerId);
//     burger.update('devoured = true', parseInt(req.params.id), (result) => {
//         if (result.affectedRows === 0) {
//             // If no rows were affected, then the ID must not exist, so 404
//             return res.status(404).end();
//           }
          
//     });
//     //res.redirect('/');
    
    
// });

app.delete('/api/burgers/:id', (req, res) => {
    burger.delete(req.params.id, () => {
        res.redirect('/');
    });
})


  module.exports = app;