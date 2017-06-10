'use strict'

const mongoose = require('mongoose');
const Prop = mongoose.model('Prop');

exports.getAll = function(req, res){
	Prop.find(function(err, props){
		if (err)
			return res.status(500).send(err)

		return res.json(props);
	});
};

exports.create = function(req, res){
	let prop = new Prop(req.body);

	prop.save(function(err, prop){
		if (err)
			return res.status(500).send(err)

		return res.json(prop);
	});
};

exports.get = function(req, res){
	Prop.findById(req.params.id, function(err, prop){
		if (err)
			return res.status(500).send(err)

		return res.json(prop);
	});
};

exports.update = function(req, res){
	Prop.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, prop){
		if (err)
			return res.status(500).send(err)

		return res.json(prop);
	});
};

exports.remove = function(req, res){
	Prop.findOneAndRemove(req.params.id, function(err, prop){
		if (err)
			return res.status(500).send(err)

		return res.json({message: "Record successfully deleted."});
	});
};