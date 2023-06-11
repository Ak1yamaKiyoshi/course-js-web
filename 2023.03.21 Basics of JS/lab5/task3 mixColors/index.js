
$(document).ready(function() {
    let selected = []
    $('th').click(function(e) {
        if (!selected.includes($(e.target).css("background-color"))) {
            selected.push($(e.target).css("background-color"))
        }
        else {
            selected.splice(selected.indexOf($(e.target).css("background-color")), 1)
        }
    });
});

