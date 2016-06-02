define(function() {
    //Do setup work here
  //  var index = 0;

    function getEnergyType() {
        console.log("get energy type called");
        $.getJSON('/', function(response) {
          //console.log(response);

          var arr = [];
          console.log("array" + arr);
          for (var i = 0; i < response.length; i++) {
              if (!arr.contains(response[i].Description)) {
                  arr.push(response[i].Description);
              }
          }
          return arr;

          console.log(arr);

          $('#debug').html(JSON.stringify(arr, null, 4));
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
