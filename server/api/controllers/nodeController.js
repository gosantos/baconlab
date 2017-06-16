'use strict';

const mongoose = require('mongoose');
const Node = mongoose.model('Node');

exports.getAll = function(req, res) {	
	Node.find(req.query, function(err, nodes){
		if (err)
			return res.status(500).send(err)

		return res.send(nodes);
	});
};

exports.create = function(req, res) {
	let node = new Node(req.body);

	node.save(function(err, node){
		if (err)
			return res.status(500).send(err)

		return res.json(node);
	});
};

exports.get = function(req, res) {
	Node.findById(req.params.id, function(err, node){
		if (err)
			return res.status(500).send(err)

		return res.json(node);
	});
};

exports.update = function(req, res) {
	Node.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, node){
		if (err)
			return res.status(500).send(err)

		return res.json(node);
	});
};

exports.remove = function(req, res) {
	Node.findOneAndRemove(req.params.id, function(err, node){
		if (err)
			return res.status(500).send(err)

		return res.json({message: "Record successfully deleted."});
	});
};