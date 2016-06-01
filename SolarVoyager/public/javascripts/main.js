
requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        about: 'javascripts/about',
        home: 'javascripts/home',
        renewables: 'javascripts/renewables/renewables',
        renewablesByIndex: 'javascripts/renewables/renewables-by-index',
        renewablesByYear: 'javascripts/renewables/renewables-by-year',
        overview: 'javascripts/high-tech-energy/energy-overview',
        type: 'javascripts/high-tech-energy/energy-types'
    }
});

requirejs(['jquery'], function($) {

    requirejs(['bootstrap', 'about','home','control', 'renewables', 'renewablesByIndex', 'renewablesByYear','overview', 'type'],
     function(bootstrap,about,home,control, renewables, renewablesByIndex, renewablesByYear, overview, type) {
        control.init();
    });
});
