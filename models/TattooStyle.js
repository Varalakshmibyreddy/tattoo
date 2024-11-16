const mongoose = require('mongoose');
const { Schema } = mongoose;

const tattooStyleSchema = new mongoose.Schema({
  subscription_id: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
});


module.exports = mongoose.model('TattooStyle1', tattooStyleSchema);

