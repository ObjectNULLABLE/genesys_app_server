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
  qualities: [{
    id: { type: Schema.Types.ObjectId, ref: 'Quality' },
    rating: Number
  }],
  description: String,
  sourceID: { type: Schema.Types.ObjectId, ref: 'Source' },
  lang: String,
  unofficialTranslation: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Weapon', weaponSchema)