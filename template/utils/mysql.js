const mysql = require('mysql');
const dbConfig = require('../config/mysql');
const pool = mysql.createPool(dbConfig);

// query 语句
function query(sql, args) {
    return new Promise((resolve, reject) => {
        pool.getConnection( (err, connection) => {
            if(err){          
               reject(err)
            }else{
                connection.query(sql, args, (err, rows) => {
                    connection.release();
                    if (err) {
                        reject(err)
                        return 
                    } 
                    resolve(rows)
                });
            }
        });
    })
}
 
module.exports = {
    query: query
}