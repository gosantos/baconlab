var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nodeSchema = new Schema({
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
  	default: Date.now 
  }
});

mongoose.model('Node', nodeSchema);

