var pkg = require('../package.json');

module.exports = {
    filename: 'example-project.js',
    banner:
        '/*!\n' +
        ' * See LICENSE in this repository for license information\n' +
        ' */\n',
    closureStart: '(function(){\n',
    closureEnd: '\n})();',

    dist: 'dist',

    jsFiles: ['app/**/*.js', '!app/bower_components/**/*', '!app/**/*_test.js'],

    testFiles: ['app/**/*_test.js'],

    versionData: {
        version: pkg.version
    }
};