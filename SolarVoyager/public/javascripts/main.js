/*
script(src="components/jquery/dist/jquery.js")
script(src="components/bootstrap/dist/js/bootstrap.js")
script(src="javascripts/control.js")
*/
requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        about: 'javascripts/about',
        work: 'javascripts/work',
        renewables: 'javascripts/renewables/renewables',
        renewablesByIndex: 'javascripts/renewables/renewables-by-index',
        renewablesByYear: 'javascripts/renewables/renewables-by-year'
    }
});

requirejs(['jquery'], function($) {

    requirejs(['bootstrap', 'about','control', 'renewables', 'renewablesByIndex', 'renewablesByYear'],
     function(bootstrap,about,control, renewables, renewablesByIndex, renewablesByYear) {
        control.init();
    });
});
