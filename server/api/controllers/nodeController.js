'use strict';

const mongoose = require('mongoose');
const Node = mongoose.model('Node');

exports.getAll = (req, res) => {
	Node.find(req.query, function(err, nodes){
		if (err)
			return res.status(500).json(err);

		return res.status(200).json(nodes);
	});
};

exports.create = (req, res) => {
	let node = new Node(req.body);

	node.save((err, node) => {
		if (err)
			return res.status(500).json(err);

		return res.status(200).json(node);
	});
};

exports.get = (req, res) => {
	Node.findById(req.params.id, (err, node) => {
		if (err)
			return res.status(500).json(err);

		return res.status(200).json(node);
	});
};

exports.update = (req, res) => {
	Node.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, node) => {
		if (err)
			return res.status(500).json(err);

		return res.status(200).json(node);
	});
};

exports.remove = (req, res) => {
	Node.findOneAndRemove(req.params.id, (err, node) => {
		if (err)
			return res.status(500).json(err);

		return res.status(200).json({message: 'Record successfully deleted.'});
	});
};
