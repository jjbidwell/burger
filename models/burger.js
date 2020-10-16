const orm = require('../config/orm.js');

const burger = {
    all: (callback) => {
        orm.selectAll(['id', 'burger_name', 'devoured'], "burgers", (res) => {
            callback(res);
        })
    }, 

    create: (newBurger, callback) => {
        orm.insert("burgers", newBurger, (res) => {
            callback(res);
        })
    }
}


module.exports = burger;