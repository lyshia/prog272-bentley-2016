define(function() {
    //Do setup work here
    var index = 0;

    function getRenewables() {
        console.log("get renewables called");
        $.getJSON('/renewables/renewables', function(response) {

            console.log(response);
            renewablesList = response.renewables;
            showRenewable(renewablesList[index]); // index?
            $('#debug').html(JSON.stringify(response, null, 4));
        })

        /*        $.getJSON('/renewables/renewables', function(response) {
                        $('#debug').html(JSON.stringify(response, null, 4));
                    })*/
        .done(function() {
                console.log("second success");
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .always(function() {
                console.log("complete");
            });
    }

    function getSimpleKeys(renewables) {
        return {
            year: renewables["Year"],
            solar: renewables["Solar (quadrillion Btu)"],
            geo: renewables["Geothermal (quadrillion Btu)"],
            otherBiomass: renewables["Other biomass (quadrillion Btu)"],
            wind: renewables["Wind power (quadrillion Btu)"],
            liquidBiofuels: renewables["Liquid biofuels (quadrillion Btu)"],
            wood: renewables["Wood biomass (quadrillion Btu)"],
            hydropower: renewables["Hydropower (quadrillion Btu)"]
        }
    };

    function showRenewable(renewables) {
        renewables = getSimpleKeys(renewables);
        $('#yearView').val(renewables.year);
        $('#solarView').val(renewables.solar);
        $('#geoView').val(renewables.geo);
        $('#otherBiomassView').val(renewables.otherBiomass);
        $('#windView').val(renewables.wind);
        $('#liquidBiofuelsView').val(renewables.liquidBiofuels);
        $('#woodView').val(renewables.wood);
        $('#hydropowerView').val(renewables.hydropower);
    };

    function indexChange(test) {
        if (test < 12 && test >= 0) {
            index = test;
            $('#indexInput').val(index);
            showRenewable(renewablesList[index]);
        }
    };

    var indexButtonChange = function(event) {
        var test = event.data.value + index;

        indexChange(test);
    };

    var buttonChange = function() {
        var test = $('#indexInput').val();
        indexChange(parseInt(test));
    };

    var renewables = {
        color: "Show All",
        size: "Renewables Data",
        init: function() {
            console.log(renewables.color);
            //var that = this;
            $('#elf-view').load('/renewables/renewables-page', function() {
                $('#display').html(renewables.color + ' ' + renewables.size);
                $('#plusButton').click({
                    value: 1
                }, indexButtonChange);
                $('#minusButton').click({
                    value: -1
                }, indexButtonChange);
                $('#indexInput').change(buttonChange);

                getRenewables();
            });
        }
    };
    return renewables;

});
