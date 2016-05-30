define(function() {
    var home = {
        page: "Home",
        size: "Page",
        init: function() {
            console.log(home.page);
            $('#elf-view').load('/home', function() {
                $('#display').html(home.page + ' ' + home.size);
            });
        }
    };
    return home;
});
