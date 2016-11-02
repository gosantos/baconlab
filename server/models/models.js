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
  	default: Date.now,
    required: true
  },
  props : [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Prop' 
  }]
});

var propSchema = new Schema({
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

mongoose.model('Prop', propSchema);

mongoose.model('Node', nodeSchema);

