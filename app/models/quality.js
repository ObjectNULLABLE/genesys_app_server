const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const qualitySchema = new Schema({
  name: String,
  active: Boolean,
  description: String,
  sourceID: { type: Schema.Types.ObjectId, ref: 'Source' },
  lang: String,
})

module.exports = model('Quality', qualitySchema)