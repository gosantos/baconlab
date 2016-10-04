var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nodeSchema = new Schema({
  iface:  String,
  name: String,
  address:   String,
  last_heartbeat: { type: Date, default: Date.now }
});

mongoose.model('Node', nodeSchema);

