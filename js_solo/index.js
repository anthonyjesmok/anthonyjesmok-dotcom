$(document).ready(function(e) {
    $.getJSON("http://www.codeivate.com/users/anthonyjesmok.json?callback=?", function(data) {
        if (data.programming_now) {
            $("#lang").text(data.current_language);
            $("#status").show();
        }
    });
});