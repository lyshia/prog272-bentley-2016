define(function() {
    //Do setup work here
    'use strict';
    var index = 0;

    function getOverview() {

        console.log('get overview called');
        $.getJSON('/high-tech-energy', function(response) {
                console.log(response);

                var overviewList = response.overview;
                showRenewable(overviewList[index]); // index?
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

    function getSimpleKeys(overview) {
        return {
            msn: overview.MSN,
            yyyymm: overview.YYYYMM,
            values: overview.Value,
            column_order: overview.Column_Order,
            description: overview.Description,
            unit: overview.Unit
        };
    }

    function showRenewable(overview) {
        overview = getSimpleKeys(overview);
        $('#msnView').val(overview.msn);
        $('#yymmView').val(overview.yyyymm);
        $('#valueView').val(overview.values);
        $('#columnView').val(overview.column_order);
        $('#descriptonView').val(overview.description);
        $('#unitView').val(overview.unit);
    }

    function indexChange(test) {
        if (test >= 0) {
            index = test;
            $('#indexInputOverview').val(index);
            showRenewable(overviewList[index]);
        }
    }

    var indexButtonChange = function(event) {
        var test = event.data.value + index;
        indexChange(test);
    };

    var buttonChange = function() {
        var test = $('#indexInputOverview').val();
        indexChange(parseInt(test));
    };

    var overview = {
        color: 'Show All',
        size: ' Data',
        init: function() {
            console.log(overview.color);
            //var that = this;
            $('#elf-view').load('/high-tech-energy/energy-overview-page', function() {
                $('#display').html(overview.color + ' ' + overview.size);
                $('#plusButtonO').click({
                    value: 1
                }, indexButtonChange);
                $('#minusButtonO').click({
                    value: -1
                }, indexButtonChange);
                $('#indexInputOverview').change(buttonChange);

                getOverview();
            });
        }
    };
    return overview;
});
