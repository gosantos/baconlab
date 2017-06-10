'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropSchema = new Schema({
  _creator: { 
    type: Schema.Types.ObjectId, 
    ref: 'Node' 
  },
  name:  { 
    type: String, 
    required: true 
  },
  value:  { 
    type: String, 
    required: true 
  },
  type:  { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model('Prop', PropSchema);
