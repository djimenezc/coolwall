/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
    logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    auth = require('./config/middlewares/authorization'),
    mongoose = require('mongoose');

process.env.NODE_ENV = env;

//Bootstrap db connection
var db = mongoose.connect(config.db);

//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

//bootstrap passport config
require('./config/passport')(passport);

var app = express();

//express settings
require('./config/express')(app, passport, db);

//Bootstrap routes
require('./config/routes')(app, passport, auth);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

//Initializing logger
logger.init(app, passport, mongoose);

//expose app
exports = module.exports = app;

var User = mongoose.model('User');

 //check if Admin user exists
 User.findOne({
    name: 'Admin'
 })
.exec(function(err, user) {
    if (err) return;
    if (user) {
        console.log('Admin user already exists');
        return;
    } 

    //create hardcoded Admin user
    var oUser = {name: 'Admin',
                 email: 'admin@sap.com',
                 password: 'admin',
                 provider : 'local',
                 is_admin : true
                };

    var adminUser = new User(oUser);
    adminUser.save(function(err) {
        if (err) {
            console.log('failed to create Admin user');
            return;
        }
        console.log('Admin user created');
    });
   
});

//for creating intial test ideas
//
//User.findOne({
//    name: 'Admin'
//})
//.exec(function(err, myUser) {
//
//var Idea = mongoose.model('Idea');
//
//var oIdea1 = { title : 'one1', board_row : 0, board_column : 0, user: myUser};
//var oIdea2 = { title : 'one2', board_row : 0, board_column : 1, user: myUser};
//var oIdea3 = { title : 'one3', board_row : 0, board_column : 2, user: myUser};
//var oIdea4 = { title : 'one4', board_row : 1, board_column : 0, user: myUser};
//var oIdea5 = { title : 'one5', board_row : 1, board_column : 1, user: myUser};
//var oIdea6 = { title : 'one6', board_row : 1, board_column : 2, user: myUser};
//var oIdea7 = { title : 'one7', board_row : 2, board_column : 0, user: myUser};
//var oIdea8 = { title : 'one8', board_row : 2, board_column : 1, user: myUser};
//var oIdea9 = { title : 'one9', board_row : 2, board_column : 2, user: myUser};
//
//     var idea = new Idea(oIdea1);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//      var idea = new Idea(oIdea2);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//       var idea = new Idea(oIdea3);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//       var idea = new Idea(oIdea4);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//       var idea = new Idea(oIdea5);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//       var idea = new Idea(oIdea6);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//       var idea = new Idea(oIdea7);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//       var idea = new Idea(oIdea8);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//     var idea = new Idea(oIdea9);
//     idea.save(function(err) {
//         if (err) {
//             console.log('failed to create idea');
//             return;;
//         }
//         console.log('idea created');
//     });
//
//
//
//    });
