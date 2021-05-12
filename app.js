const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const databaseConnection = require('./db-connect.json');
const dotenv = require('dotenv');
dotenv.config();

let app = express();
const PORT = process.env.PORT || 8090;
const MONGO_URI = databaseConnection.url;
const mongoConnection = mongoose.connection;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

require('./plugins/delivery-services/index')(app);

app.route('/').get((req, res) => {
  res.send('<h4>Welcome to ShopaFy Deliver API by REG_WE_14</h4>');
});

mongoConnection.once("open", (error) => {
  if (error) {
    return console.log('Cannot connect to MongoDB');
  }
  console.log('MongoDB Connection Success');
})

app.listen(PORT, error => {
  if (error) {
    return console.log(`Cannot connect the the server using PORT ${PORT}`);
  }
  console.log(`Successfully connected to server on PORT ${PORT}`);
});