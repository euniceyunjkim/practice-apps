const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

connection.connect();

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  // .then(() =>
  //   // Expand this table definition as needed:
  //   db.queryAsync(
  //     // "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
  //     }
  //   )
  .catch((err) => console.log(err));

// const addUserDataButBetter = async (data)=>{
//   try {
//     const data = await db.query("INSERT INTO user (id, first_name, last_name, email, userPW) VALUES (?,?,?,?,?)", [data.id, data.first_name, data.last_name, data.email, data.userPW]);
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
//}

const addUserData = async (data) => {
   connection.promise().query(
    "INSERT INTO user (id, first_name, last_name, email, userPW) VALUES (?,?,?,?,?)", [data.id, data.first_name, data.last_name, data.email, data.userPW], function (err, res) {
      if (err) {
        console.log("err adding user data", err);
      } else {
        console.log("user info added");
      }})
    .then(connection.promise().query("INSERT INTO user_deets (userid, addr, addr2, city, st, zip, phone) VALUES (?,?,?,?,?,?,?)", [data.id, data.addr, data.addr2, data.city, data.st, data.zip, data.phone], function (err, res) {
        if (err) {
          console.log("err adding user deets", err);
        } else {
          console.log("user details added");
    }}))
    .then(connection.promise().query("INSERT INTO user_pmt (userpmtid, cc_num, exp_date, cvv, pmt_zip) VALUES (?,?,?,?,?)", [data.id, data.cc_num, data.exp_date, data.cvv, data.pmt_zip], function (err, res) {
        if (err) {
          console.log("err adding user payment", err)
        } else {
          console.log("user payment added");
        }
      }
    ))
    .catch(err =>
      console.log("request unsuccessful", err))
}

module.exports = db;
module.exports.addUserData = addUserData;
// module.exports.addUserDataButBetter = addUserDataButBetter;