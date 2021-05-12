const express = require('express');
const controller = require('./delivery.controller');
const router = express.Router();

module.exports = (app) => {
  router.post('/create', controller.createDelivery);
  router.get('/get/:id', controller.getDeliveryByUserId);
  router.get('/get', controller.getAllDelivery);
  app.use('/delivery', router);
}