$(document).ready(function() {  

    $('.card').click(function() {
        let width = parseInt($(this).css('width'),10)
        $(this).animate({
            width: '0px', 
            'margin-left': width/2+'px'
        }, "1s")
        
        $(this).animate({
            width: width+'px', 
            'margin-left': 0
        }, "1s")
        if ($(this).hasClass('card_back'))
        $(this).toggleClass('card_front')
        else $(this).toggleClass('card_back')
    });
    
});

