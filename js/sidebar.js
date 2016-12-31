var sidebar = {
    init: function(){

        $("#sidebar").load("includes/sidebar.html");
        // Accordion - Expand All #01
        $(function () {
            $(".accordion").accordion({
                collapsible: true,
                active: false,
                autoHeight:false
            });
            var icons = $(".accordion").accordion("option", "icons");
            $('.open').click(function () {
                $('.ui-accordion-header').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top').attr({
                    'aria-selected': 'true',
                    'tabindex': '0'
                });
                $('.ui-accordion-header-icon').removeClass(icons.header).addClass(icons.headerSelected);
                $('.ui-accordion-content').addClass('ui-accordion-content-active').attr({
                    'aria-expanded': 'true',
                    'aria-hidden': 'false'
                }).show();
                $(this).attr("disabled", "disabled");
                $('.close').removeAttr("disabled");
            });
            $('.close').click(function () {
                $('.ui-accordion-header').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-corner-all').attr({
                    'aria-selected': 'false',
                    'tabindex': '-1'
                });
                $('.ui-accordion-header-icon').removeClass(icons.headerSelected).addClass(icons.header);
                $('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({
                    'aria-expanded': 'false',
                    'aria-hidden': 'true'
                }).hide();
                $(this).attr("disabled", "disabled");
                $('.open').removeAttr("disabled");
            });
            $('.ui-accordion-header').click(function () {
                $('.open').removeAttr("disabled");
                $('.close').removeAttr("disabled");

            });
        });
    },

    loadSection: function(qs){

        var section = qs['section'].split('_');

        var load_path = "chapters/" + section[0] + "/" + section[1] + "/" + section[2] + ".html";

        $("#problem_view").load(load_path, function(response, status, xhr){
            if(status == "error"){

                $("#problem_view").load("includes/404.html");
            }
        });
    }
}

sidebar.init();