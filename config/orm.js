const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
    selectAll: (whatToSelect, table) => {
        connection.query('SELECT ?? FROM ??',[whatToSelect, table], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
        })
    },
    selectWhere: (inputTable, colmumnSearch, columnValue) => {
        const queryString ='SELECT party_name FROM ?? WHERE ?? = ?';
        const replacements = [inputTable, colmumnSearch, columnValue];
        connection.query(queryString, replacements, (err, result) => {
            if (err) {
                throw err;
            };
            console.log(result);
        });
    },
    selectLeftJoin: (columns, tableA, tableB, onTableAColumn, onTableBColumn) => {
        const queryString =
          'SELECT ?? FROM ?? AS A LEFT JOIN ?? AS B ON A.?? = B.??';
        const replacements = [
          columns,
          tableA,
          tableB,
          onTableAColumn,
          onTableBColumn,
        ];
        connection.query(queryString, replacements, (error, results) => {
          if (error) {
            throw error;
          }
          console.log(results);
        });
      },

};

module.exports = orm;