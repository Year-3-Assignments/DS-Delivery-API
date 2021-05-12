const DeliveryService = require('./delivery-service.model');

const createService = async (req, res) => {
  const service = new DeliveryService(req.body);
  await service.save()
  .then(response => {
    res.status(200).send({ data: response });
  })
  .catch(error => {
    res.status(500).send({ message: `Error with crete service ${error.message}` });
  });
}

const getServices = async (req, res) => {
  await DeliveryService.find()
  .then(services => {
    res.status(200).send({ data: services });
  })
  .catch(error => {
    res.status(500).send({ message: `Error with get services ${error.message}` });
  });

}

module.exports = {
  createService,
  getServices
}