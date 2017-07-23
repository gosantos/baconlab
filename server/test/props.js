'use strict';

let mongoose = require('mongoose');
let chai = require('chai');
let chaiHttp = require('chai-http');

let server = require('../server');
let Node = require('../api/models/nodeModel');
let Prop = require('../api/models/propModel');

describe('Props', () => {
  let prop, node;
  let nodeId;

  beforeEach((done) => {
    Prop.remove({}, (err) => {
      done();
    });

    node = new Node({
      iface: 'clavicula',
      name: 'saboneteira',
      address: 'morango',
      last_heartbeat: Date.now(),
    });

    nodeId = node.id;

    prop = new Prop({
      _creator: nodeId,
      name: 'name',
      type: 'type',
      value: 'value',
    });

  });

  describe('POST /api/props/', () => {
    it('should post a prop', (done) => {
      chai.request(server)
        .post('/api/props/')
        .send(prop)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_creator').eql(nodeId);
          res.body.should.have.property('name').eql('name');
          res.body.should.have.property('type').eql('type');
          res.body.should.have.property('value').eql('value');
          done();
      });
    });
  });

  describe('GET /api/props/', () => {
    it('should get all props', (done) => {
      chai.request(server)
        .get('/api/props/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
      });
    });
  });

  describe('GET /api/props/id', () => {
    it('should get a prop', (done) => {
      prop.save((err, node) => {
        chai.request(server)
          .get('/api/props/' + prop.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('_creator').eql(nodeId);
            res.body.should.have.property('name').eql('name');
            res.body.should.have.property('type').eql('type');
            res.body.should.have.property('value').eql('value');
            done();
        });
      });
    });
  });

  describe('PUT /api/props/id ', () => {
    it('should update a prop', (done) => {
      prop.save((err, prop) => {
        chai.request(server)
          .put('/api/props/' + prop.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('_creator').eql(nodeId);
            res.body.should.have.property('name').eql('name');
            res.body.should.have.property('type').eql('type');
            res.body.should.have.property('value').eql('value');
            done();
          });
      });
    });
  });

  describe('DELETE /api/props/id ', () => {
    it('should delete a prop', (done) => {
      prop.save((err, prop) => {
        chai.request(server)
          .delete('/api/props/' + prop.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql('Record successfully deleted.');
            done();
          });
      });
    });
  });

});
