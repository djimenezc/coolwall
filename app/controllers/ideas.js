/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Idea = mongoose.model('Idea'),
    _ = require('underscore');


/**
 * Find idea by id
 */
exports.idea = function(req, res, next, id) {
    Idea.load(id, function(err, idea) {
        if (err) return next(err);
        if (!idea) return next(new Error('Failed to load idea ' + id));
        req.idea = idea;
        next();
    });
};

/**
 * Create a idea
 */
exports.create = function(req, res) {    
    var idea = new Idea(req.body);
    idea.user = req.user;

    idea.save(function(err) {
        if (err) {           
            return res.send('users/signup', {
                errors: err.errors,
                idea: idea
            });
        } else {
            res.jsonp(idea);
        }
    });
};

/**
 * Update a idea
 */
exports.update = function(req, res) {
  //  console.log(req.idea);
  //  console.log(req.body);

    var idea = req.idea;

    idea = _.extend(idea, req.body);

    idea.save(function(err) {
        res.jsonp(idea);
    });
};

/**
 * Delete an idea
 */
exports.destroy = function(req, res) {
    var idea = req.idea;

    idea.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(idea);
        }
    });
};

/**
 * Show an idea
 */
exports.show = function(req, res) {
    res.jsonp(req.idea);
};

/**
 * List of ideas
 */
exports.all = function(req, res) {
    Idea.find().sort('-created').populate('user', 'name username').exec(function(err, ideas) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(ideas);
        }
    });
};
