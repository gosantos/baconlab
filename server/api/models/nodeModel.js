'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NodeSchema = new Schema({
  iface:  { 
  	type: String, 
  	required: true 
  },
  name: { 
  	type: String, 
  	required: true 
  },
  address: { 
  	type: String, 
  	required: true 
  },
  last_heartbeat: { 
  	type: Date, 
  	default: Date.now,
    required: true
  },
  props : [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Prop' 
  }]
});

module.exports = mongoose.model('Node', NodeSchema);
