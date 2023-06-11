
$(document).ready(function() {
    $('button').click(function() {
        $('table').append(`<tr><th> ${$('table').html().split("<tr>").length-1} </th><th> ${$('#firstname').val()} </th><th> ${$('#lastname').val()} </th></tr>`)
        $('#firstname').val("");
        $('#lastname').val("");
    });
});

