var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Prop = mongoose.model('Prop');

var Node = mongoose.model('Node');


router.route('/')

	.post(function(req, res){
		var prop = new Prop();
		prop._creator = req.body._creator;
		prop.name = req.body.name;
		prop.value = req.body.value;
		prop.type = req.body.type;

		prop.save(function(err, prop){
			if (err)
				return res.send(500, err);

			Node.findById(prop._creator, function(err, node){
				if (err)
					return res.send(500, err);

				node.props.push(prop);
				node.save(function(err, node){
					if (err)
						return res.send(err);
				});
			});

			return res.json(prop);
		});

	})

    .get(function(req, res){
        Prop.find(function(err, props){
            if(err)
                return res.send(500, err);
        	
        	return res.send(props);
        });

    });

router.route('/:id')

	.get(function(req, res){
		Prop.findById(req.params.id, function(err, prop){
			if (err)
				return res.send(err);

			return res.send(prop);
		}).populate({ path: '_creator', select: 'iface address name'});
	})

	.put(function(req, res){
		Prop.findById(req.params.id, function(err, prop){
			if (err)
				return res.send(err);

			prop._creator = req.body._creator;
			prop.name = req.body.name;
			prop.value = req.body.value;
			prop.type = req.body.type;

			prop.save(function(err, prop){
				if (err)
					return res.send(err);

				return res.json(prop);
			});
		});
	})

	.delete(function(req, res){
		Prop.remove({_id: req.params.id}, function(err, prop){
			if (err)
				return res.send(err);

			return res.json(prop);
		});
	});


module.exports = router;