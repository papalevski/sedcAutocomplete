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

}(jQuery));