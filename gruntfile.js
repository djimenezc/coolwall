module.exports = function (grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /* Add uglify plugin to minify JS */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd/mm/yyyy")%> */\n'
            },
            dist: {
                src: 'public/js/**/*.js',
                dest: 'public/dist/app.min.js'
            }
        },
        removelogging: {
            dist: {
                src: 'public/dist/app.min.js',
                dest: 'public/dist/app.min.js'
            }
        },
        watch: {
            jade: {
                files: ['app/views/**'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['public/js/**', 'app/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['public/views/**'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['public/css/**'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: ['gruntfile.js', 'public/js/**/*.js', 'test/**/*.js', 'app/**/*.js'],
            with_overrides: {
                options: {
                    indent: 4
                }
            }
        },
        nodemon: {
            dev: {
                options: {
                    file: 'server.js',
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['app', 'config'],
                    debug: true,
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        mochaTest: {
            options: {
                reporter: 'spec'
            },
            src: ['test/mocha/**/*.js']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS'],
                singleRun: true
            }
        },

        protractor : {
            options : {
                configFile: "node_modules/protractor/referenceConf.js", // Default
                // config
                // file
                keepAlive: true, // If false, the grunt process stops
                // when the test fails.
                args: {
                    // Arguments passed to the command
                }
            },
            your_target : {
                configFile : "config/e2e.conf.js", // Target-specific
                // config file
                options : {
                    args : {}
                    // Target-specific arguments
                }
            },
        },
        env : {
            test : {
                NODE_ENV : 'test'
            },
            integration_test : {
                NODE_ENV : 'integration_test'
            },
            dev : {
                NODE_ENV : 'development'
            }
        },
        sass : { // Task
            dist : { // Target
                options : { // Target options
                    style : 'expanded'
                },
                files : { // Dictionary of files
                    'public/css/common.css' : 'public/css/common.scss' // 'destination':
                    // 'source'
                }
            }
        }
    });

	// Load NPM tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-remove-logging');

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-env');

	grunt.loadNpmTasks('grunt-contrib-sass');

	// Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	// Default task(s). Executed when you're simply running 'grunt'
	grunt.registerTask('default', [ 'sassit', 'jshint', 'uglify',
			'removelogging' ]);

	// Test task.
	grunt.registerTask('test', [ 'env:test', 'mochaTest', 'karma' ]);
	grunt.registerTask('integration-test', [ 'env:integration_test',
			'protractor' ]);

	// Uglify task.
	grunt.registerTask('minify', 'uglify');

	// Remove logging.
	grunt.registerTask('remove-logging', 'removelogging');

	// Start server
	grunt.registerTask('server', 'env:dev', 'concurrent');

	// run sass
	grunt.registerTask('sassit', 'sass');
};
