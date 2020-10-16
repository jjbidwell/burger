const express = require('express');

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
    orm.selectAll(['burger_name', 'devoured'], 'burgers', displayBurgers);
    res.render('index', {not_eaten: notEatenArray, eaten: eatenArray});
});

router.post('/', (req, res) => {
    //console.log(req.body.burger_input);
    orm.postTo('burgers', 'burger_name', req.body.burger_input);
    res.redirect('/')
});

router.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${ PORT}`);
  });

  module.exports = router;