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
        control: 'javascripts/renewables',
        about: 'javascripts/about',
        work: 'javascripts/work'
    }
});

requirejs(['jquery'], function($) {
    requirejs(['bootstrap', 'about','control'], function(bootstrap,about,control) {
        control.init();
    });
});
