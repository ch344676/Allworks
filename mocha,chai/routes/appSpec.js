var sinon = require('sinon');
var request = require('supertest');

var model = require('../model.js');
var modelStub = sinon.stub(model, 'find');

var app = require('../app.js');
var address = request("http://localhost:8080/")

describe('controller', function(){
  beforeEach(function(){
    modelStub.yields(null, [{'id': 1, 'name': 'item'}]);
  });

  describe('Find items', function(){
    it('should attempt to find items', function(done){
		address
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){

          if (err) return done(err);
            console.log(res.body);
          // Enter your assertions here
          done();
        });
    });
  });
});
