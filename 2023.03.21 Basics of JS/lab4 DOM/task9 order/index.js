function drawProducts(products) {
    products.forEach(element => {
        $('#container').append(`<div class="products"> <p> ${element} </p> <button class="buy"> buy </button></div>`)
    });
}

function drawBin(bin) {
    uniqueBin = Array.from(new Set(bin));
    $('#bin').html('')
    uniqueBin.forEach(element => { 
        $('#bin').append(`<div class="in_bin_product"> <p>${element}</p> <p> ${bin.filter(value => value == element).length}</p></div>`)
    });
}

$(document).ready(function() {
    let state = {
        bin:[],
        products: ["drones", "not drones", "something","something1", "something2","something23"]
    }
    drawProducts(state.products);
    $('.buy').click(function(e) {
        state.bin.push($($(e.target).parent().children()[0]).text() )
        drawBin(state.bin);
    })
});