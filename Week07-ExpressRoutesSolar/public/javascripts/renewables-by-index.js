define(function() {
    //Do setup work here
    function getByIndex() {
        console.log("get by index called");
        var userInput = $('#renewableByIndexInput').val();
        $.getJSON('/renewableByIndex/' + userInput, function(response) {
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

    var renewablesByIndex = {
        color: "Green",
        size: "LittleGreen",
        init: function() {
            console.log(renewablesByIndex.color);
            //var that = this;
            $('#elf-view').load('/renewables-by-index-page', function() {
                $('#display').html(renewablesByIndex.color + ' ' + renewablesByIndex.size);
                $('#renewableByIndexInput').change(function() {
                    getByIndex();
                })
                getByIndex();

            });
        }
    };
    return renewablesByIndex;


});
