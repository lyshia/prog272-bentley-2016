define(function() {
    //Do setup work here

        function getByYear() {
            console.log('get by year calledd');
            var userInput = $('#reneweableByYearInput').val();
            $.getJSON('/renewablesByYear/' + userInput, function(response) {
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
        color: "Green",
        size: "LittleGreen",
        init: function() {
            console.log(renewablesByYear.color);
            //var that = this;
            $('#elf-view').load('/renewables-by-year', function() {
                $('#display').html(renewablesByYear.color + ' ' + renewablesByYear.size);
                $('#renewableByYearInput').change(function() {
                    getByYear();
                })
                getByYear();

            });
        }
    };
    return renewablesByYear;

});
