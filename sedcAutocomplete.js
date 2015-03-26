(function ($) {

    $.fn.sedcAutocomplete = function () {

        $(this).autocomplete({
            source: function (request, response) {
                console.log(request.term);
                $.ajax({
                    url: "http://en.wikipedia.org/w/api.php",
                    dataType: "jsonp",
                    data: {
                        'action': "opensearch",
                        'format': "json",
                        'search': request.term
                    },
                    success: function (data) {
                        response(data[1]);
                    }
                });
            }
        });

        return this;
    };

    $.fn.sedcAutocompleteWithoutJqueryUI = function () {


        $(this).keypress(function () {

            var searchText = $(this).val();

            var resultsPanel = $(this).attr("data-results-panel-id");

            $.ajax({
                url: "http://en.wikipedia.org/w/api.php",
                dataType: "jsonp",
                data: {
                    'action': "opensearch",
                    'format': "json",
                    'search': searchText
                },
                success: function (data) {

                    $("#" + resultsPanel).html("");

                    $.each(data[1], function (i, item) {
                        $("#" + resultsPanel).append("<p>" + item + "</p>");
                    });

                }
            });
        });


        return this;
    };

}(jQuery));