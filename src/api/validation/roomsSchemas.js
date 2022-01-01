const Joi = require('joi');

const { object, string, number } = Joi.types();

exports.addRoomSchema = object.keys({
  hotelID: number.integer().min(1).required(),
  img: string.required(),
  type: string.required(),
  cost: number.integer().required(),
});