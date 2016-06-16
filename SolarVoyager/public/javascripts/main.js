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
        msnTypes: 'javascripts/high-tech-energy/energy-types'
    }
});

requirejs(['jquery'], function($) {
    'use strict';
    requirejs(['bootstrap', 'about', 'home', 'control', 'renewables', 'renewablesByIndex', 'renewablesByYear', 'overview', 'msnTypes'],
        function(bootstrap, about, home, control, renewables, renewablesByIndex, renewablesByYear, overview, msnTypes) {
            control.init();
        });
});
