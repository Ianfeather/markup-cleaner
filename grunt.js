module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    watch: {
      coffee: {
        files: '<config:coffee.all.src>',
        tasks: 'coffeeReset'
      }
    },

    coffee: {
      all: {
        src: ['test/**/*.coffee'],
        dest: '<%= grunt.task.current.target %>'
      }
    }
  });

  // External tasks
  grunt.loadNpmTasks('grunt-coffee');

  // Tasks
  grunt.registerTask('default', 'coffee');
};