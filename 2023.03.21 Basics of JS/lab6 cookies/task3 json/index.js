
$(document).ready(function() {
    $('button').click(function() {
        $('div').html();
        let output = ''
        $.parseJSON($('input').val()).forEach(element => {
            output += `<img src="./photos/${element}"> </img>`
        })
        $('div').append(output);
    });
})