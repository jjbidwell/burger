//const { delete } = require("../controllers/controller.js");
const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  selectAll: (whatToSelect, table, callback) => {
      connection.query('SELECT ?? FROM ??;',[whatToSelect, table], (err, result) => {
        if (err) {
          throw err;
        }
        callback(result);
        //res.render('index', {not_eaten: notEatenArray, eaten: eatenArray});
    })
  },

  insert: (table, variables, values, callback) => {
    const queryString = `INSERT INTO ??(??) VALUES(?);`
    connection.query(queryString, [table, variables, values], (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    })
  },

  update: (table, change, id ,callback) => {
    const queryString = 'UPDATE ?? SET devoured = ? WHERE id = ?';
    connection.query(queryString, [table, change, id], (err, result) => {
      if (err){
        throw err;
      }
      callback(result);
    })
  },

  remove: (table, id, callback) => {
    const queryString = 'DELETE FROM ?? WHERE id = ?;'
    connection.query(queryString, [table, id], (err, result) => {
      if (err){
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;