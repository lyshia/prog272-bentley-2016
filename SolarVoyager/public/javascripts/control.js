define(['jquery', 'about', 'home', 'renewables', 'renewablesByIndex', 'renewablesByYear', 'overview','type'],
    function($, about, home, renewables, renewablesByIndex, renewablesByYear, overview, type) {
        //Do setup work here

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

        var control = {
            color: "black",
            size: "unisize",
            setup: function() {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
      /*      init: function() {
                    $('#aboutButton').click(about.init);
                    $('#homeButton').click(home.init);
                    $('#renewablesButton').click(renewables.init);
                    $('#renewablesByIndexButton').click(renewablesByIndex.init);
                    $('#renewablesByYearButton').click(renewablesByYear.init);
                    home.init();
                }*/

                            init: function() {
                                $('.homeMenu').click(home.init);
                                $('.renewablesMenu').click(renewables.init);
                                $('.renewablesByIndexMenu').click(renewablesByIndex.init);
                                $('.renewablesByYearMenu').click(renewablesByYear.init);
                                $('.aboutMenu').click(about.init);
                                $('.highTechEnergyOverviewMenu').click(overview.init);
                                $('.highTechEnergyTypesMenu').click(type.init);
                                home.init();
                            }
        };

        return control;


    });
