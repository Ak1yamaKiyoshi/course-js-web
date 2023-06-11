
$(document).ready(function() {
    $(document).click(function() {
        $(document.activeElement).on("focusin", function(e) {
            $(e.target).parent().css("background-color", "#7da2e3")
        });
        $(document.activeElement).on("focusout", function(e) {
            $(e.target).parent().css("background-color", "#fff")
        });
    });
});