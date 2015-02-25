module.exports = function(grunt) {

  grunt.initConfig({
    ts: {
      default: {
        src: ['app/**/*.ts'],
        options: {
          out: 'app/app.js',
          module: 'commonjs', 
          target: 'es5',
          sourceMap: true,
          noImplicitAny: true,
          references: [

          ]
        }
      }
    },
    uglify: {
      app: {
        files: {
          'app/app.min.js': ['app/**/*.js', '!app/**/*_tests.js']
        }
      }
    },
    clean: {
      js: ["app/**/*.js"]
    },
    watch: {
      files: ['<%= ts.default.src %>'],
      tasks: ['default'],
      options: {
        livereload: true,
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean', 'ts', 'uglify']);
};