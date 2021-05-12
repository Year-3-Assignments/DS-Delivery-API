const mongoose = require('mongoose');

const deliveryService = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  nic: { type: String, required: true, trim: true, maxlength: 11 },
  email: { type: String, required: true, trim: true },
  phonenumber: { type: String, required: true, trim: true, maxlength: 10 },
  avatar: { type: String, required: false, trim: true },
  address1: { type: String, required: true, trim: true },
  address2: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  zipcode: { type: Number, required: true, trim: true },
}, {
  timestamps: true
});

const DeliveryService = mongoose.model('services', deliveryService);
module.exports = DeliveryService;