'use strict'

const mongoose = require('mongoose');
const Prop = mongoose.model('Prop');

exports.getAll = function(req, res){
	Prop.find(req.query, function(err, props){
		if (err)
			return res.status(500).json(err)

		return res.status(200).json(props);
	});
};

exports.create = function(req, res){
	let prop = new Prop(req.body);

	prop.save(function(err, prop){
		if (err)
			return res.status(500).json(err)

		return res.status(200).json(prop);
	});
};

exports.get = function(req, res){
	Prop.findById(req.params.id, function(err, prop){
		if (err)
			return res.status(500).json(err)

		return res.status(200).json(prop);
	});
};

exports.update = function(req, res){
	Prop.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, prop){
		if (err)
			return res.status(500).json(err)

		return res.status(200).json(prop);
	});
};

exports.remove = function(req, res){
	Prop.findOneAndRemove(req.params.id, function(err, prop){
		if (err)
			return res.status(500).json(err)

		return res.status(200).json({message: "Record successfully deleted."});
	});
};
