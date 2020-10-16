const orm = require('../config/orm.js');

const burger = {
    all: (callback) => {
        orm.selectAll('burgers', (res) => {
            callback(res);
        })
    }, 

    create: (newBurger, callback) => {
        orm.postTo("burgers", newBurger, (res) => {
            callback(res);
        })
    }
}


module.exports = burger;