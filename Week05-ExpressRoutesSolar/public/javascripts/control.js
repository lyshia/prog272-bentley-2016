$(document).ready(function() {
    'use strict';

    $('#renewables').click(doThis);

    function doThis() {
        $.getJSON('/renewables', function(response) {
                console.log(response);
            })
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
});
