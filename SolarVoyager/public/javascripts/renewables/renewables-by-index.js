define(function() {
    //Do setup work here
    'use strict';

    function getByIndex() {
        console.log('get by index called');
        var userInput = $('#renewableByIndexInput').val();
        $.getJSON('/renewables/renewableByIndex/' + userInput, function(response) {
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
    var renewablesByIndex = {
        color: 'Show Renewables',
        size: 'by Index',
        init: function() {
            console.log(renewablesByIndex.color);
            //var that = this;
            $('#elf-view').load('/renewables/renewables-by-index-page', function() {
                $('#display').html(renewablesByIndex.color + ' ' + renewablesByIndex.size);
                $('#renewableByIndexInput').change(function() {
                    getByIndex();
                });
                getByIndex();
            });
        }
    };
    return renewablesByIndex;
});
