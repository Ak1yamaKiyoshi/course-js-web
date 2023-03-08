
$(document).ready(function() {
    $('.currency_dropdown_toggle').click(function(event) {
        let inOut = JSON.stringify(event.target.id)
        if (inOut.includes("button_in")) {
            direction = "#in";
            direction_button = "#button_in";
        }
        else if (inOut.includes("button_out")) {
            direction = "#out";
            direction_button = "#button_out";
        }
        
        
        $(`${direction}`).attr("hidden", function(index, attr) {
            return attr == "hidden" ? null : "hidden";
        });

        //console.log()
        //console.log(event.target.innerHTML)
        if (!JSON.stringify(event.target.innerHTML).includes("<ul")) {
            let txt = $(`${direction_button}`).html()    
            console.log(txt)
            console.log()
            console.log(txt.slice(txt.slice(txt.search('[\n]+')+1, -1).search('[\n]+'), -3));

        }
    });
});