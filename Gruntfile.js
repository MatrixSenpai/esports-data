module.exports = function(grunt) {
  grunt.initConfig({
    jsonlint: {
      nalcs: {
        src: ['./nalcs/*/**.json'],
        options: {
          formatter: 'prose'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');

  grunt.registerTask('default', ['jsonlint']);
};
