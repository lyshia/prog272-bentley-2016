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
        home: 'public/javascripts/home',
        renewables: 'public/javascripts/renewables/renewables',
        renewablesByIndex: 'public/javascripts/renewables/renewables-by-index',
        renewablesByYear: 'public/javascripts/renewables/renewables-by-year',
        overview: 'public/javascripts/high-tech-energy/energy-overview',
        types: 'public/javascripts/high-tech-energy/energy-types',
        msnTypes: 'public/javascripts/high-tech-energy/msn-types',
        about: 'public/javascripts/about',
        clientRenewables: 'spec/data/client-renewables'
    },
    deps: loadTestsIntoArray(),
    callback: window.__karma__.start
});