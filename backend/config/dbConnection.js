
const mongoose = require('mongoose');

const dbConnection = () =>{
  mongoose.connect(process.env.DB_URL)
  .then(con =>{
    console.log('MongoDB Connected to host : ', con.connection.host);
  })
  .catch((err =>{
    console.error('MongoDB Connection Failed!');
    console.log(`Error - ${err.message}`)
  }))
}

module.exports = dbConnection;