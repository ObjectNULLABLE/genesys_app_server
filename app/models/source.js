const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const sourceSchema = new Schema({
  name: String,
  shortName: String,
  description: String,
  lang: String,
  unofficialTranslation: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Source', sourceSchema)