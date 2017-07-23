'use strict';

let mongoose = require('mongoose');
let chai = require('chai');
let chaiHttp = require('chai-http');

let server = require('../server');
let Node = require('../api/models/nodeModel');
let Prop = require('../api/models/propModel');

let should = chai.should();
chai.use(chaiHttp);

describe('Nodes', () => {
  let node, prop;

  beforeEach((done) => {
    Node.remove({}, (err) => {
      done();
    });

    node = new Node({
      iface: 'clavicula',
      name: 'saboneteira',
      address: 'morango',
      last_heartbeat: Date.now(),
    });

    prop = new Prop({
      _creator: node.id,
      name: 'name',
      type: 'name',
      value: 'name',
    });

    node.props.push(prop);
  });

  describe('POST /api/nodes/', () => {
    it('should post a node', (done) => {
      chai.request(server)
        .post('/api/nodes/')
        .send(node)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('iface').eql('clavicula');
          res.body.should.have.property('name').eql('saboneteira');
          res.body.should.have.property('address').eql('morango');
          res.body.should.have.property('props');
          done();
      });
    });
  });

  describe('GET /api/nodes/', () => {
    it('should get all nodes', (done) => {
      chai.request(server)
        .get('/api/nodes/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('GET /api/nodes/id', () => {
    it('should get a node', (done) => {
      node.save((err, node) => {
        chai.request(server)
          .get('/api/nodes/' + node.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('iface').eql('clavicula');
            res.body.should.have.property('name').eql('saboneteira');
            res.body.should.have.property('address').eql('morango');
            res.body.should.have.property('props');
            done();
          });
      });
    });
  });

  describe('PUT /api/nodes/id ', () => {
    it('should update a node', (done) => {
      node.save((err, node) => {
        chai.request(server)
          .put('/api/nodes/' + node.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('iface').eql('clavicula');
            res.body.should.have.property('name').eql('saboneteira');
            res.body.should.have.property('address').eql('morango');
            res.body.should.have.property('props');
            done();
          });
      });
    });
  });

  describe('DELETE /api/nodes/id ', () => {
    it('should delete a node', (done) => {
      node.save((err, node) => {
        chai.request(server)
          .delete('/api/nodes/' + node.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql('Record successfully deleted.');
            done();
          });
      });
    });
  });

});
