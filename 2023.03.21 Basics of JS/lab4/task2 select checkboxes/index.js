
$(document).ready(function() {
    $('#button').click(function() {
        $('#output').text(
            ["", ...$('#emails').serializeArray()].reduce((acc, val) => {
            return acc += val.name + '; ';
        }));
    });
});
