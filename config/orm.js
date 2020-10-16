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

  insert: (table, variables, values) => {
    const queryString = `INSERT INTO ?? VALUES('?');`
    connection.query(queryString, [table, variables, values], (err, result) => {
      if (err) {
        throw err;
      }
    })
  }

    

};

module.exports = orm;