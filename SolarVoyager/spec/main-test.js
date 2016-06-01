function loadTestsIntoArray() {
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
        control: 'public/javascripts/control',
        home: 'public/javascripts/home',
        renewables: 'public/javascripts/renewables/renewables',
        renewablesByIndex: 'public/javascripts/renewables/renewables-by-index',
        renewablesByYear: 'public/javascripts/renewables/renewables-by-year',
        overview: 'public/javascripts/high-tech-energy/energy-overview',
        type: 'public/javascripts/high-tech-energy/energy-types'
        // THE REST LEFT AS AN EXERCISE
    },
    deps: loadTestsIntoArray(),
    callback: window.__karma__.start
});
