// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
	  'public/lib/jquery/jquery.min.js',
	  'public/lib/jquery-ui/ui/minified/jquery-ui.min.js',
	  'public/lib/jquery-ui/ui/minified/jquery.ui.draggable.min.js',
	  'public/lib/jquery-ui/ui/minified/jquery.ui.droppable.min.js',
	  'public/lib/jqueryui-touch-punch/jquery.ui.touch-punch.min.js',      
      'public/lib/angular/angular.js',
      'public/lib/angular-mocks/angular-mocks.js',
      'public/lib/angular-cookies/angular-cookies.js',
      'public/lib/angular-resource/angular-resource.js',
      'public/lib/angular-route/angular-route.js',
      'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
      'public/lib/angular-bootstrap/ui-bootstrap.js',
      'public/lib/angular-ui-utils/modules/route/route.js',
      'public/lib/angular-dragdrop/src/angular-dragdrop.min.js',
      'public/lib/angular-dragdrop/src/angular-dragdrop.min.js',
      'public/lib/angular-xeditable/dist/js/xeditable.min.js',
      
//      'public/lib/jquery/jquery.js',
      'public/js/*.js',
      'public/js/**/*.js',
      'test/karma/mock/**/*.js',
      'test/karma/specs/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8081,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
    
    junitReporter : {
		outputFile : 'test_out/unit.xml',
		suite : 'unit'
	}
  });
};
