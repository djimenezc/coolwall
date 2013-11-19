/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../../server'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Idea = mongoose.model('Idea');

//Globals
var user;
var idea;

//The tests
describe('<Unit Test>', function() {
    describe('Model Idea:', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });

            user.save(function(err) {
                idea = new Idea({
                    title: 'Idea Title',
                    description: 'Idea Description',
                    user: user,
                    board_row : 0,
                    board_column : 0,
                    is_on_board : true
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return idea.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save without title', function(done) {
                idea.title = '';

                return idea.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            Idea.remove({});
            User.remove({});
            done();
        });
        after(function(done){
            Idea.remove().exec();
            User.remove().exec();
            done();
        });
    });
});
