const orm = require('../config/orm.js');

const burger = {
    all: (callback) => {
        orm.selectAll('burger_name', "burgers", (res) => {
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