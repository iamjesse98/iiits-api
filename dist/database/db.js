"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b73de7b8cfffd5",
    password: "ca0b7d3f",
    database: "heroku_c9028d96deb4c64"
});
var connectToDB = function () {
    return new Promise(function (resolve, reject) {
        con.connect(function (err) {
            if (err)
                reject(err);
            resolve('Successfully connected to DB');
        });
    });
};
exports.connectToDB = connectToDB;

// import { resolve } from 'path';
// const con = mysql.createConnection({
//     host: "us-cdbr-iron-east-01.cleardb.net",
//     user: "b73de7b8cfffd5",
//     password: "ca0b7d3f",
//     database: "heroku_c9028d96deb4c64"
// });
// const connectToDB = () => {
//     return new Promise((resolve, reject) => {
//         con.connect(function (err) {
//             if (err) reject(err);
//             resolve('Successfully connected to DB');
//         });
//     })
// }

var query = function (query) {
    var con1 = mysql.createPool({
        connectionLimit: 10,
        host: "us-cdbr-iron-east-01.cleardb.net",
        user: "b73de7b8cfffd5",
        password: "ca0b7d3f",
        database: "heroku_c9028d96deb4c64",
    });
    return new Promise(function (resolve, reject) {
        con1.query(query, function (err, result) {
            // try  { con1.end(); }
            // catch (e) {
            //     console.log(e)
            // }
            if (err)
                reject(err);
            resolve(result);
        });
    });
};
exports.query = query;
//# sourceMappingURL=db.js.map