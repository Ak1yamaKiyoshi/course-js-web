
$(document).ready(function() {
    $('.edit').click(function(e) {
        if ($(e.target).parent().children()[2].tagName == "P") {
            $(e.target).parent().append(`<textarea class="edit">${$($(e.target).parent().children()[2]).text()} </textarea>`)
            $(e.target).parent().children()[2].remove()
        }
        else {
            $(e.target).parent().append(`<p class="edit">${$($(e.target).parent().children()[2]).val()}</p>`)
            $(e.target).parent().children()[2].remove()
        }
    });
});

