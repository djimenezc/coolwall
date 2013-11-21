/**
 * Module dependencies.
 */
var should = require('should'), app = require('../../../server'), mongoose = require('mongoose'), User = mongoose
		.model('User'), assert = require('assert');
request = require('supertest');
mongoose = require('mongoose');
winston = require('winston');

describe('User REST API Tests', function() {
	var url = 'http://localhost:3001';

	describe('User', function() {
		it('Create user', function(done) {
			var user = {
				name : 'Full name',
				email : 'test4@test.com',
				username : 'user4',
				password : 'password'
			};

			request(url).post('/users').send(user).expect(302) // Status code
			.end(function(err, res) {
				if (err) {
					throw err;
				}

				done();
			});
		});

		it('Check user', function(done) {
			User.find({
				username : 'user4'
			}, function(err, users) {
				users.should.have.length(1);
				done();
			});
		});

	});
});
