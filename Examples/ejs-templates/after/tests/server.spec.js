const chai = require('chai')
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const app = require('../server/app');

var mock = [];

describe("server module", function() {
	beforeEach(function(){
    mock = [
      {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
      },
      {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
      },
      {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
      }
    ];
  })
  it("GET / responds with a 200 response code", function(done) {
		expect(mock.length).to.equal(3);
		chai.request(app)
  		.get('/')
  		.end(function(err, res) {
  			expect(res).to.have.status(200);
  			expect(err).to.be.null;
  			expect(res).to.be.json;
  			expect(res.body).to.deep.equal({ "status": "ok" })
  			done();
  		})
	});
	it("GET /api/TodoItems responds with an item", function(done) {
		expect(mock.length).to.equal(3);
		chai.request(app)
  		.get('/api/TodoItems')
  		.end(function(err, res) {
  			expect(res).to.have.status(200);
  			expect(err).to.be.null;
  			done();
  		})
	});
	it("POST /api/TodoItems responds with item, status 201", function(done) {
		expect(mock.length).to.equal(3);
		chai.request(app)
  		.post('/api/TodoItems')
      .send({
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
      })
  		.end(function(err, res) {
        expect(res).to.have.status(201);
  			expect(err).to.be.null;
        expect(res.body.todoItemId).to.equal(0);
        done();
  		})
	});
	it("DELETE /api/TodoItems/{id} responds with an item", function(done) {
		expect(mock.length).to.equal(3);
		chai.request(app)
      .delete('/api/TodoItems/0')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res.body.todoItemId).to.equal(0);
        done();
      });
	});
	it("GET /api/TodoItems/{id} responds with an item", function(done) {
		expect(mock.length).to.equal(3);
		chai.request(app)
      .get('/api/TodoItems/0')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res.body.todoItemId).to.equal(1);
        done();
    })
	});
	it("PUT /api/TodoItems/{id} responds with an item", function(done) {
		expect(mock.length).to.equal(3);
		chai.request(app)
      .put('/api/TodoItems')
      .send({
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
      })
      .end(function(err, res) {
        expect(res).to.have.status(201);
        expect(err).to.be.null;
        expect(res.body.todoItemId).to.equal(0);
        done();
      })
	});
});
