var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Node = mongoose.model('Node');

var Prop = mongoose.model('Prop');


router.route('/')

	.post(function(req, res){
		var node = new Node();
		node.iface = req.body.iface;
		node.name = req.body.name;
		node.address = req.body.address;
		node.props = req.body.props;

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
		Node.findById(req.params.id, function(err, node){
			if (err)
				return res.send(err);

			return res.send(node);
		}).populate('props');
	})

	.put(function(req, res){
		Node.findById(req.params.id, function(err, node){
			if (err)
				return res.send(err);

			node.iface = req.body.iface;
			node.name = req.body.name;
			node.address = req.body.address;
			node.props = req.body.props;

			req.body.props.forEach(function(prop){
				Prop.findById(prop._id, function(err, mongoProp){
					mongoProp._creator = prop._creator;
					mongoProp.name = prop.name;
					mongoProp.value = prop.value;
					mongoProp.type = prop.type;
		
					mongoProp.save(function(err){
						if (err)
							return res.send(err);
					});
				});			
			});

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