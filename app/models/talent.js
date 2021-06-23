const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const talentSchema = new Schema({
  name: String,
  tier: Number,
  activation: String,
  ranked: Boolean,
  description: String,
  worlds: [String],
  sourceID: { type: Schema.Types.ObjectId, ref: 'Source' },
  lang: String
})

module.exports = model('Talent', talentSchema)