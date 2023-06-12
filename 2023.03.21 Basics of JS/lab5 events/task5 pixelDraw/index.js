
function drawCleanBoard(){
    let output = ""
    for( let i = 0; i < 10; i++){
        output += "<tr>"
        for (let j = 0; j < 10; j++)
            output += "<th width='10' height='10'></th>"
        output += "</tr>"
    }
    $('.board').append(output);
}

$(document).ready(function() {
    drawCleanBoard()
    let selected = undefined
    $('th').click(function(e) {
        if ($(this).parent().parent().hasClass('palette')) {
            if (selected) selected.css('border', '0px solid blue')
            selected = $(this);
            selected.css('border', '2px solid blue', 'padding', '-5px')
        } else {
            $(this).css('background-color', selected.css('background-color'))
        }
    });
});

