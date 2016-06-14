define(['jquery', 'about', 'home', 'renewables', 'renewablesByIndex', 'renewablesByYear', 'overview', 'energyTypes'],
    function($, about, home, renewables, renewablesByIndex, renewablesByYear, overview, energyTypes) {
        //Do setup work here
        'use strict';

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

        var control = {
            color: 'black',
            size: 'unisize',
            setup: function() {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },

            init: function() {
                $('.homeMenu').click(home.init);
                $('.renewablesMenu').click(renewables.init);
                $('.renewablesByIndexMenu').click(renewablesByIndex.init);
                $('.renewablesByYearMenu').click(renewablesByYear.init);
                $('.aboutMenu').click(about.init);
                $('.highTechEnergyOverviewMenu').click(overview.init);
                $('.highTechEnergyTypesMenu').click(energyTypes.init);
                home.init();
            }
        };
        return control;
    });
