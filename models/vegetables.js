const mongoose = require('mongoose');

const vegetablesSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    isReadyToEat:{
        type:Boolean,
        required:true,
      },
});

const vegetablesdb = mongoose.model('Vegetable', vegetablesSchema);

module.exports = vegetablesdb;