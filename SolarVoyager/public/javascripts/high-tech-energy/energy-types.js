define(function() {
    //Do setup work here
    'use strict';

    function getEnergyType() {
        console.log('get energy type called');
        $.getJSON('/high-tech-energy', function(response) {

            console.log(response);

            $('#debug').html(JSON.stringify(response, null, 4));
        })

        .done(function() {
                console.log('second success');
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .always(function() {
                console.log('complete');
            });
    }

    var energyTypes = {

        init: function() {
            //var that = this;
            $('#elf-view').load('/high-tech-energy/energy-types', function() {

                getEnergyType();
            });
        }
    };
    return energyTypes;
});
