
$(document).ready(function() {
   $('#properties').on("change", function() {
       
        let properties = $('#properties').serializeArray();
        $('#rect').css({
            'width' :properties[0].value+'px', 
            'height':properties[1].value+'px', 
            'rotate':properties[2].value+'deg', 
            'background-color':properties[3].value,
        });
        console.log(`h: ${properties[1].value+'px'} w:${properties[0].value+'px'} r:${properties[2].value+'deg'} c:${properties[3].value}`)
    
   })
});