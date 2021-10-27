const express = require('express');
const controller = require('../controllers/hotelsController');

const router = express.Router();

router.route('/').get(controller.getHotels).post(controller.addHotel);

router.route('/:id').get(controller.getHotel).delete(controller.deleteHotel);

module.exports = router;
