const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const weaponSchema = new Schema({
  name: String,
  skillID: String,
  scaleFromBrawn: Boolean,
  damage: Number,
  crit: Number,
  range: String,
  encum: Number,
  price: Number,
  rarity: Number,
  qualities: Array,
  description: String,
  sourceID: { type: Schema.Types.ObjectId, ref: 'Source' },
  lang: String
})

module.exports = model('Weapon', weaponSchema)