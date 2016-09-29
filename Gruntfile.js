module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        cssmin: {
            dist: {
                files: {
                    'main.min.css' : 'main.css'
                }
            }
        },
        less: {
            development: {
                options: {
                    // compress: true,  I will add this to prod folder
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'main.css': 'main.less' // destination file : source file if more ['less1' , 'less2' ]
                }
            }
        },
        watch: {
            styles: {
                files: ['*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin', 'grunt-contrib-less', 'grunt-contrib-watch');

    grunt.registerTask('default', ['less']);
};
