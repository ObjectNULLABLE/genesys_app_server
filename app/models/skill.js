const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const skillSchema = new Schema({
  name: String,
  characteristic: String,
  worlds: [String],
  type: {type: String},
  description: String,
  useIf: String,
  notUseIf: String,
  sourceID: { type: Schema.Types.ObjectId, ref: 'Source' },
  lang: String,
  unofficialTranslation: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Skill', skillSchema)