const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const skillSchema = new Schema({
  name: String,
  characteristic: String,
  worlds: Array,
  type: String,
  description: String,
  useIf: String,
  notUseIf: String,
  sourceID: String,
  lang: String,
})

module.exports = model('Skill', skillSchema)