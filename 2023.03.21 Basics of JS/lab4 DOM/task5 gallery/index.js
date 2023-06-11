function createTiles() {
    for (let i = 0; i < 10; i++) {
        $('#gallery').append(`<img src="photos/photo.png" class="image" id="${i}"></img>`)
    }
}


$(document).ready(function() {
    createTiles();
    $('.image').click(function () {
        ($(this).hasClass('image')) 
        ? $(this).removeClass('image').addClass('image_active') 
        : $(this).removeClass('image_active').addClass('image ')
    });
});