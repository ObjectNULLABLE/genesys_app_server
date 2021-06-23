const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const adversarySchema = new Schema({
  name: String,
  type: { type: String},
  description: String,
  characteristics: {
    type: Map,
    of: Number
  },
  derivedAttributes: {
    type: Map,
    of: Number
  },
  skills: Array,
  talents: Array,
  abilityIDs: [String],
  equipmentIDs: [String],
  worlds: [String],
  sourceID: { type: Schema.Types.ObjectId, ref: 'Source' },
  tags: [String],
  lang: String
})

module.exports = model('Adversary', adversarySchema)