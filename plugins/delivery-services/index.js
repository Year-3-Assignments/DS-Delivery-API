const express = require('express');
const controller = require('./delivery-service.controller');
const router = express.Router();

module.exports = (app) => {
  router.post('/create', controller.createService);
  router.get('/get', controller.getServices);
  app.use('/service', router)
}

