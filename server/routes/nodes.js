var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Node = mongoose.model('Node');


router.route('/')

	.post(function(req, res){
		var node = new Node();
		node.iface = req.body.iface;
		node.name = req.body.name;
		node.address = req.body.address;
		node.save(function(err, node){
			if (err)
				return res.send(500, err);
			

			return res.json(node);
		});
	})

    .get(function(req, res){
        Node.find(function(err, nodes){
            if(err)
                return res.send(500, err);
            
            return res.send(nodes);
        });

    });

router.route('/:id')

	.get(function(req, res){
		console.log ('id: ' + req.params.id);
		Node.findById(req.params.id, function(err, node){
			if (err)
				return res.send(err);

			return res.send(node);
		});
	})

	.put(function(req, res){
		Node.findById(req.params.id, function(err, node){
			if (err)
				return res.send(err);

			node.iface = req.body.iface;
			node.name = req.body.name;
			node.address = req.body.address;

			node.save(function(err, node){
				if (err)
					return res.send(err);

				return res.json(node);
			});
		});
	})

	.delete(function(req, res){
		Node.remove({_id: req.params.id}, function(err, node){
			if (err)
				return res.send(err);

			return res.json(node);
		});
	});


module.exports = router;