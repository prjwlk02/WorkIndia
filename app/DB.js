const mysql=require('mysql');  

var connection=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root@11', 
    database: 'workindia' //Schema name
});

module.exports=connection;
