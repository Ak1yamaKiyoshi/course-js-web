
function adjust(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

$(document).ready(function() {
    let orgignColor = "#002766";
    //rgb(255, 0, 123)
    let color = JSON.parse(JSON.stringify(orgignColor))
    let size = 50;
    let speed = 20;
    $('#fill').click(function() {
        color = JSON.parse(JSON.stringify(orgignColor));
    });
    $('#draw').click(function() {
        color = adjust(color, speed);
        console.log(color)
        $('.display').append(`<th style="padding:${size}; background-color: ${color};});"></th>`)
    
    });
});

