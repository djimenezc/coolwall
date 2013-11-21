/**
 * Module dependencies.
 */
var should = require('should'), app = require('../../../server'), mongoose = require('mongoose'), User = mongoose
		.model('User'), assert = require('assert');
request = require('supertest');
mongoose = require('mongoose');
winston = require('winston');

var Session = require('supertest-session')({
	app : require('../../../server')
});

var myuser;
var myidea;

describe('Idea REST API Tests', function() {
	var url = 'http://localhost:3001';

	before(function() {
		this.sess = new Session(url);
	});

	after(function() {
		this.sess.destroy();
	});

	describe('Idea', function() {
		it('Create user', function(done) {
			var user = {
				name : 'Full name',
				email : 'test5@test.com',
				username : 'user5',
				password : 'password'
			};

			// request(url)
			this.sess.post('/users').send(user).expect(302) // Status code
			.end(function(err, res) {
				if (err) {
					throw err;
				}

				done();
			});
		});

		it('Check user', function(done) {
			User.find({
				username : 'user5'
			}, function(err, users) {
				users.should.have.length(1);
				// console.log(myuser);
				done();
			});
		});

		it('Create idea', function(done) {
			var idea = {
				title : 'Idea Title',
				description : 'Idea Description',
				board_row : 0,
				board_column : 0,
				is_on_board : true
			};

			// request(url)
			this.sess.post('/ideas').send(idea).expect(200) // Status code
			.end(function(err, res) {
				if (err) {
					throw err;
				}
				// console.log(res.body);
				myidea = res.body;
				res.body.should.have.property('_id');
				res.body.title.should.equal('Idea Title');
				done();
			});
		});

		it('Update idea', function(done) {

			myidea.title = 'New title';
		//	console.log('/ideas/' + myidea._id);

			this.sess
				.put('/ideas/' + myidea._id )
				.send(myidea)
				.expect(200) //Status code
				.end(function(err,res) {
					if (err) {
						throw err;
					}

				//	console.log(res.body);
					myidea = res.body;
					res.body.should.have.property('_id');
					res.body.title.should.equal('New title');
					done();
				});
			});
	
	it('Get all ideas', function(done) {
			
			this.sess
				.get('/ideas')
				//.send(myidea)
				.expect(200) //Status code
				.end(function(err,res) {
					if (err) {
						throw err;
					}

					//console.log(res.body);
					//myidea = res.body;
					res.body.should.have.length(1);
					
					done();
				});
			});	

	it('Delete idea', function(done) {
			
			this.sess
				.del('/ideas/' + myidea._id)
				//.send(myidea)
				.expect(200) //Status code
				.end(function(err,res) {
					if (err) {
						throw err;
					}

					//console.log(res.body);
					//myidea = res.body;
					res.body.should.have.property('_id');
					
					done();
				});
			});	

	});
});
