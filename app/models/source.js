const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const sourceSchema = new Schema({
  name: String,
  shortName: String,
  description: String,
  lang: String,
})

module.exports = model('Source', sourceSchema)