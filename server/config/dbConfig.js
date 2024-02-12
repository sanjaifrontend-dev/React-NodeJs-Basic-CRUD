import mysql from 'mysql2';

// Connect to DB
const connection = mysql.createConnection({
    host: '68.178.155.122',
    user: 'crud',
    password: '8098629606@123',
    database: 'crud',
    port: '3306'
});

connection.connect((err) => {
    if(!err){
        console.log('DB connected Successfully!!!');
    }else{
        console.log('Connection error', err);
    }
});

// connection.end();
export default connection;
