$(document).ready(function() {  
    let selected = undefined
    $(document).on("mousedown", function(e){
        if ($(e.target).hasClass('to_drag'))
        selected =$(e.target);
    });
    $(document).on("mousemove", function(e){
        if (selected) selected.css({top: e.pageY-50, left: e.pageX-50});
    });
    $(document).on("mouseup", function() {
        selected = undefined;
    });
    
});

