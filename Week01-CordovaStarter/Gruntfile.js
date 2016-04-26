module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        pkg: '<json:package.json>',

        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: [
                    '**/node_modules/**'
                ],
                reporter: 'checkstyle',
                reporterOutput: 'result.xml',
                strict: true,
                globals: {
                    describe: true,
                    afterEach: true,
                    beforeEach: true,
                    inject: true,
                    it: true,
                    jasmine: true,
                    expect: true,
                    module: true,
                }
            }
        },

        clean: {
            work: {
                src: ['**/node_modules/**']
            },

            zip: {
                src: ['<%= zipFile %>']
            }
        },

        jscs: {
            src: ['**/*.js', '!spec/bitly-links.js', '!**/platforms/**', '!**/plugins/**'],
            options: {
                config: '.jscsrc'
            }
        },

        'jsbeautifier': {
            files: ['**/*.js', '!**/node_modules/**', '!**/components/**', '!**/platforms/**', '!**/plugins/**'],
            options: {
                'indentSize': 4
            }
        },

        getUrl: function(accessToken) {
            'use strict';

            var baseUrl = 'https://api-ssl.bitly.com/v3/user/link_history';
            var params = '?access_token=';

            if (accessToken === -1) {
                return 'data/bitly-links.json';
            } else {
                var url = baseUrl + params;
                return url += accessToken;
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.registerTask('beautify', ['jsbeautifier']);
    grunt.registerTask('check', ['beautify', 'jscs', 'jshint']);
};
