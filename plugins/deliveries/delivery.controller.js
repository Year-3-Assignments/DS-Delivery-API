const Delivery = require('./delivery.model');

const createDelivery = async (req, res) => {
  const delivery = new Delivery(req.body);
  await delivery.save()
  .then(response => {
    res.status(200).send({ data: response });
  })
  .catch(error => {
    res.status(500).send({ message: `Error with crete delivery ${error.message}` });
  });
}

const getDeliveryByUserId = async (req, res) => {
  let userId = req.params.id;
  await Delivery.find({ customerId: userId })
  .then(deliveries => {
    res.status(200).send({ data: deliveries });
  })
  .catch(error => {
    res.status(500).send({ message: `Error with get deliveries ${error.message}` });
  });
}

const getAllDelivery = async (req, res) => {
  await Delivery.find()
  .then(deliveries => {
    res.status(200).send({ data: deliveries });
  })
  .catch(error => {
    res.status(500).send({ message: `Error with get deliveries ${error.message}` });
  });
}

module.exports = {
  createDelivery,
  getDeliveryByUserId,
  getAllDelivery
}