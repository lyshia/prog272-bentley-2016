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
<<<<<<< HEAD
        control: 'javascripts/control'
=======
        control: 'javascripts/control',
        about: 'javascripts/about',
        work: 'javascripts/work'
>>>>>>> week06
    }
});

requirejs(['jquery'], function($) {

<<<<<<< HEAD
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
=======
    requirejs(['bootstrap', 'about','control'], function(bootstrap,about,control) {
>>>>>>> week06
        control.init();
    });
});
