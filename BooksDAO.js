const mysql = require('mysql');

function insert(connection, data, callback){
    let insertQuery = "INSERT INTO STUDENTS (id_student, name, rfid_code) VALUES (?,?,?)";
    let query = mysql.format(insertQuery, [data.id_student, data.name, data.rfid_code]);
    connection.query(query, function(err, result){
        if (err) {
            throw err;
        } else {
           callback(result); 
        }
    });
}

function read(connection, callback){
    let query = "SELECT * FROM students";
    connection.query(query, function(err, result){
        if (err) {
            throw err;
        } else {
           callback(result); 
        }
    });
}

function update(connection, data, callback){
    let updateQuery = "UPDATE STUDENTS SET rfid_code= ? WHERE id_student = ?";
    let query = mysql.format(updateQuery, [data.rfid_code,data.id_student]);
    connection.query(query, function(err, result){
        if (err) {
            throw err;
        } else {
           callback(result); 
        }
    });
}

function find(connection, data, callback){
let findQuery = "SELECT * FROM STUDENTS WHERE rfid_code = ?";
    let query = mysql.format(findQuery, [data.rfid_code]);
    connection.query(query, function(err, result){
        if (err) {
            throw err;
        } else {
           callback(result); 
        }
    });
}

function remove(connection, data, callback){
    let removeQuery = "DELETE FROM STUDENTS WHERE id_student = ?";
    let query = mysql.format(removeQuery, [data.id_student]);
    connection.query(query, function(err, result){
        if (err) {
            throw err;
        } else {
           callback(result); 
        }
    });
}

module.exports = {insert, read, update, remove, find};