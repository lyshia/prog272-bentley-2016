/**
 * @author Charlie Calvert
 */

function loadTestsIntoArray() {
    'use strict';
    var tests = [];
    for (var file in window.__karma__.files) {
        if (/test-/.test(file)) {
            console.log('Loaded test:', file);
            tests.push(file);
        }
    }
    return tests;
}

require.config({
    baseUrl: '/base',

    paths: {
        jquery: 'public/components/jquery/jquery.min',
        control: 'public/javascripts/control',
        work: 'public/javascripts/work',
        renewables: 'public/javascripts/renewables/renewables',
        about: 'public/javascripts/about',
        clientRenewables: 'spec/data/client-renewables'
    },
    deps: loadTestsIntoArray(),
    callback: window.__karma__.start
});
