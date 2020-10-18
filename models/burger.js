const orm = require('../config/orm.js');

const burger = {
    all: (callback) => {
        orm.selectAll(['id', 'burger_name', 'devoured'], "burgers", (res) => {
            callback(res);
        })
    }, 

    create: (newBurger, callback) => {
        orm.insert('burgers', 'burger_name', newBurger, (res) => {
            callback(res);
        })
    },

    eat: (id, callback) => {
        orm.update('burgers', '1', id, (res) => {
            callback(res);
        })
    },
    

    delete: (id, callback) => {
        orm.remove('burgers', id, (res) => {
            callback(res);
        })
    }
}


module.exports = burger;