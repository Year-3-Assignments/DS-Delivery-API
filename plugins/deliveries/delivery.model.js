const mongoose = require('mongoose');

const delivery = mongoose.Schema({
  deliveryCode: { type: String, required: true, trim: true, maxlength: 15 },
  serviceId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'services' },
  createdDate: { type: Date, required: true, trim: true },
  destinationAddress1: { type: String, required: true, trim: true },
  destinationAddress2: { type: String, required: true, trim: true },
  destinationCity: { type: String, required: true, trim: true },
  destinationCountry: { type: String, required: true, trim: true },
  destinationZipCode: { type: Number, required: true, trim: true },
  customerId: { type: Number, required: true, trim: true },
  customerPhone: { type: String, required: true, trim: true, maxlength: 10 },
  customerEmail: { type: String, required: true, trim: true },
  items: [{
    productId: { type: Number, required: true, trim: true },
    productName: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    itemCode: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, trim: true },
    totalPrice: { type: Number, required: true, trim: true },
  }]
});

const Delivery = mongoose.model('deliveries', delivery);
module.exports = Delivery;