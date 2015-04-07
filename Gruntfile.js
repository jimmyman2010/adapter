'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        // Tasks go here
        watch: {
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

    grunt.registerTask('default', ['compass', 'cssmin']);
};
