const fs   = require('fs');
const path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    jsonlint: {
      nalcs: {
        src: ['./nalcs/*/**.json'],
        options: {
          formatter: 'prose'
        }
      }
    },
    datalint: {
      nalcs: {
        options: {
          players: false,
          teams  : false
        },
        data: [
          './nalcs/2018/',
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');

  grunt.registerTask('default', ['jsonlint']);
  grunt.registerMultiTask('datalint', 'Lint Esports data', function() {
    var source = this.data.data;
    source.forEach(function(location) {
      var files = fs.readdirSync(location);

      files.forEach(function(file) {
        if(file == "master.json" || file == "players.json" || file == "teams.json") { return; }
        if(file == "1-tb.json" || file == "2-tb.json") { return; }

        checkFileData(location + file, grunt);
        return;
      });

      grunt.log.ok(files.length + " checked: OK");
    });
  })
};

function checkFileData(filename, grunt) {
  let raw  = fs.readFileSync(filename);
  let json = JSON.parse(raw);

  try {
    let data = json['week']['days'];

    for(var k in data) {
      let day = data[k]["games"];

      var teams = [];

      for(var kk in day) {
        let game = day[kk];

        let blue = game["blue"];
        let red  = game["red"];

        if(teams.includes(blue)) { grunt.fail.warn("("+ k + "/" + kk + ")Team " + blue + " is already included in " + filename); }
        else { teams.push(blue); }
        if(teams.includes(red)) { grunt.fail.warn("("+ k + "/" + kk +" )Team " + red + " is already included in " + filename); }
        else { teams.push(red); }
      }
    }

  } catch(e) {
    grunt.log.error("Required keys missing - " + filename);
  }
}
