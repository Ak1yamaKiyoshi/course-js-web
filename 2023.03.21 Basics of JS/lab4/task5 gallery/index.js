function createTiles() {
    for (let i = 0; i < 10; i++) {

        $('#gallery').append(`<img src="photo.png" class="image" id="${i}"></img>`)
    }
    console.log("AAA")
}


$(document).ready(function() {
    createTiles();

    $.each()
    $('.image').click(function () {

        console.log(this.css({opacity:0.2}))
    }
    )
});