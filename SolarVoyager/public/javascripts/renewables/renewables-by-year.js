define(function() {
    //Do setup work here
    function getByYear() {
        console.log("get renewables by year called");
        var userInput = $('#reneweableByYearInput').val();
        $.getJSON('/renewables/renewableByYear/' + userInput, function(response) { // here? take out s?
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

    var renewablesByYear = {
        color: "Show Renewables",
        size: "By Year",
        init: function() {
            console.log(renewablesByYear.color);
            //var that = this;
            $('#elf-view').load('/renewables/renewables-by-year', function() {
                $('#display').html(renewablesByYear.color + ' ' + renewablesByYear.size);
                $('#reneweableByYearInput').change(function() {
                    getByYear();
                })
                getByYear();

            });
        }
    };
    return renewablesByYear;


});
