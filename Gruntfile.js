module.exports = function (grunt) {
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: [
                    'src/_intro.js',
                    'src/main.js',
                    'src/_outro.js'
                ],
                dest: 'dist/<%= pkg.name.replace(".js", "") %>.js'
            }
        },
        
        uglify: {
            options: {
                banner: '/*! <%= pkg.name.replace(".js", "") %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name.replace(".js", "") %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        
        qunit: {
            files: ['test/*.html']
        },
        
        jshint: {
            files: ['dist/JamgleCoreLibrary.js'],
            options: {
                globals: {
                    console: true,
                    module: true,
                    document: true
                },
                jshintrc: '.jshintrc'
            }
        },
        
        open: {
          all: {
            // Gets the port from the connect configuration
            path: 'http://localhost:<%= express.all.options.port%>/demo/index.html'
          }
        },
        
        express: {
          all: {
            options: {
              port: 9000,
              hostname: "localhost",
              bases: [__dirname],
              livereload: true
            }
          }
        },
        
        watch: {
            files: ['<%= jshint.files %>', 'src/*.js', 'demo/assets/*.js', 'demo/*.html'],
            tasks: ['concat', 'jshint', 'qunit'],
            options: {
              livereload: true,
            }
        }
    });

    //load the grunt plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-serve');


    //register the grunt serve task called by console
    grunt.registerTask('serve', 'start the server and preview your app', function (target) {
        grunt.log.writeln('STARTING GRUNT SERVE TASK');
        grunt.task.run([
            'express',
            'open', 
            'watch'
        ]);
    });
    //register the grunt test task called by console
    grunt.registerTask('test', ['jshint', 'qunit']);
    //register the default grunt task called by console
    grunt.registerTask('default', ['concat', 'jshint', 'qunit', 'uglify']);


};
