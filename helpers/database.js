const mariadb= require("mariadb");

const pool = mariadb.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT,
    connectionLimit: 5
});


pool.getConnection()
    .then(conn => {
        console.log("habemus BD")
        connection.release();
    }).catch(err => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection lost');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connection');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused');
        }
});

module.exports = pool;