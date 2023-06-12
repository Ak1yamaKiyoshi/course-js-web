
$(document).ready(function() {
    let selected = []
    $('th').click(function(e) {
        if (!selected.includes($(e.target).css("background-color"))) {
            selected.push($(e.target).css("background-color"))
            $(e.target).css("border", "2px solid blue", "margin", "-2px")
        }
        else {
            selected.splice(selected.indexOf($(e.target).css("background-color")), 1)
            $(e.target).css("border", "0px solid blue")
        }
        $('#display').css('background', `linear-gradient(${selected.reduce((acc, val) => { return acc + ", " + val})})`)
    });
});

