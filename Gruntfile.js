module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': ['styles/**/*.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['styles/**/*.css'],
                tasks: ['cssmin']
            }
        },
        image_resize: {
            options: {
                width: 640
            },
            /*src: 'assets/out_of_the_blog/*.jpg',
            dest: 'dist/'*/
            files: {
                'assets/out_of_the_blog/daniel-cheung-129839.jpg':  'dist/daniel-cheung-129839.jpg'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch' /*, 'jshint', 'uglify' , 'copy'*/ ]);
};