define(function() {
    //Do setup work here
    function getRenewables() {

        $.getJSON('/renewables', function(response) {
                console.log(response);
                $('#debug').html(JSON.stringify(response, null, 4));
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

    var renewables = {
        color: "BRIGHT Green",
        size: "LittleGreen",
        init: function() {
            console.log(renewables.color);
            //var that = this;
            $('#elf-view').load('/renewables-page', function() {
                $('#display').html(renewables.color + ' ' + renewables.size);
                getRenewables();
            });
        }
    };
    return renewables;
});
