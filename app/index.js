var path = require('path')
var yeoman = require('yeoman-generator');

var GulpCoffeeGenerator = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
  },
  writing: {
    packagsjson: function() {
      var pkg = {
        'version': '0.1.0',
        'dependencies': {},
        'scripts': {
          'start': 'gulp build',
          'watch': 'gulp watch'
        }
      };
      this.write('package.json', JSON.stringify(pkg));
    },
    copyFiles: function() {
      this.log.writeln('Copying project files...');
      this.fs.copy(
        this.templatePath('./**/*'),
        this.destinationPath()
      );
      // Copy all dotfiles
      this.copy('.gitignore', '.gitignore');
      this.copy('.npmignore', '.npmignore');
    }
  },
  install: function() {
    var done = this.async();
    this.log.writeln('npm installing');
    this.spawnCommand('npm', [
      'install',
      'coffee-script',
      'gulp',
      'gulp-coffee',
      'gulp-util',
      'del',
      '--save-dev',
      '--production'
    ])
    .on('exit', function() {
        done();
    }.bind(this));
  },
  end: function() {
    this.log.writeln('All set, run `npm start` to start dev server');
  }
});

module.exports = GulpCoffeeGenerator