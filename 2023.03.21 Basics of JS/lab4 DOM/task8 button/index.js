
$(document).ready(function() {
    let state = true;
    $('#magic_button').click(function() {
        $('#image').css(  {'width': (state) ? $('#image').width()/2+'px' : $('#image').width()*2+'px'});
        state = !state;
    });
});