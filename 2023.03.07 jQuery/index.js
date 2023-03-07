$(document).ready(function() {
    
	$('.currency_dropdown_toggle').click(function() {
		$('.currency_dropdown').attr("hidden", function(index, attr) {
            return attr == "hidden" ? null : "hidden";
        });
        console.log('AAAAAAAAAAaa')
	});
});
