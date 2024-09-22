const express   = require('express');
const app       = express();
const path      = require('path');
const cors      = require('cors');

const dotenv    = require('dotenv');
dotenv.config({path:path.join(__dirname,'config','config.env')});

// DB Connection...............
const ConnectDB = require('./config/dbConnection');

ConnectDB();

const PORT      = process.env.PORT;
const ENV       = process.env.NODE_ENV;

const products  = require('./routes/products') 
const orders    = require('./routes/orders'); 

app.use(express.json());
app.use(cors());

app.use('/',products);
app.use('/',orders);






app.listen(PORT, ()=>{
  console.log(`Server is Listening on : ${PORT} in ${ENV}`)
})