'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            app: ['js/app.js']
        },
        uglify: {
            dev: {
                files: {
                    'js/app.min.js': ['js/app.js']
                }
            }
        },
        watch: {
            js: {
                files: ['js/*.js'],
                tasks: ['jshint', 'uglify']
            },
            css: {
                files: ['scss/*.scss', 'scss/*/*.scss', 'scss/*/*/*.scss'],
                tasks: ['compass', 'cssmin']
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        }
    });

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Do the same for compass and other tasks.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'cssmin']);
};
