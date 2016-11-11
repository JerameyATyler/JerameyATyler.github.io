var sidebar = {
    init: function(){

        $("#sidebar").load("includes/sidebar.html");
    },

    loadSection: function(qs){

        var section = qs['section'].split('_');

        var load_path = "chapters/" + section[0] + "/" + section[1] + "/" + section[1] + ".html";

        $("#problem_view").load(load_path, function(response, status, xhr){
            if(status == "error"){

                $("#problem_view").load("includes/404.html");
            }
        });
    }
}

sidebar.init();