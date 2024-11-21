const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');

const dotenv    = require('dotenv');
dotenv.config({path:path.join(__dirname,'config.env')});

const app = express();
app.use(bodyParser.json());
app.use(cors());



mongoose.connect(process.env.DB)
.then(()=>{
  console.log("db success");
})

const qrcodeSchema = new mongoose.Schema({
    qr_id: { type: String },
    membership_id: { type: String},
    qr_count: { type: Number },
  });

const qrCounter = mongoose.model('User', qrcodeSchema);


app.post('/scan-qr', async (req, res) => {
    try {
      const { qr_id, membership_id, qr_count } = req.body;

      console.log(req.body);
    
  
      const count = new qrCounter({ 
        qr_id: qr_id,
          membership_id: membership_id,
          qr_count: qr_count });

      count.save();
      res.status(201).send(count);
    } catch (error) {
      console.error('Error saving QR data:', error);
      res.status(500).send({ error: 'Server error while saving QR data.' });
    }
  });
  


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}` );
});


