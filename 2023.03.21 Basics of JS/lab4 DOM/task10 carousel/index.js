
$(document).ready(function() {
    let state = {
        index: 1,
        max: 3
    }
    $('.carousel button').click(function(e){
        if ($(e.target).text() == "=>") {
            if(state.index+1 > state.max) state.index = 0 ;
            $('.carousel img').attr('src', `image${++state.index}.jpg    `)
        } else if ($(e.target).text() == "<="){
            if(state.index-1 < 1) state.index = state.max+1;
            $('.carousel img').attr('src', `image${--state.index}.jpg`)
        }

    });
});