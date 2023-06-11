
$(document).ready(function() {
    $('#button').click(function() {
        $('#output').text(
            ["", ...$('#languages').serializeArray()].reduce((acc, val) => {
            return acc += val.name + ' ';
        }));
        
    });
});
