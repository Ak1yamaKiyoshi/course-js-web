function displayBooks(books){
    $('.container').html("")
    books.forEach(book => {
        $('.container').append(`<div class="book"><h3> title: ${book.title} </h3><p> year: ${book.year} </p><p> pages: ${book.pages} </p><p> author: ${book.author} </p></div>`)
    });
}


$(document).ready(function() {
    books = [
        {year:"1984",title:"aaaa",author:"someAuthor",pages:"123"},
        {year:"1984",title:"aaaa",author:"someAuthor",pages:"123"},
        {year:"1984",title:"aaaa",author:"someAuthor",pages:"123"},
        {year:"1984",title:"aaaa",author:"someAuthor",pages:"123"},
        {year:"1984",title:"aaaa",author:"someAuthor",pages:"123"},
        {year:"1984",title:"aaaa",author:"someAuthor",pages:"123"},
    ];
    displayBooks(books);

    let color1 = "rgb(96, 241, 68)";
    let color2 = 'rgb(250, 235, 215)';

    $('.book').click(function(e) {
        if (e.target.tagName == 'DIV') 
            $(e.target).css({
                'background-color': (($(e.target).css('background-color') == color1) ? color2 : color1)
            });
        else 
            $(e.target).parent().css({
                'background-color': (($(e.target).parent().css('background-color') == color1) ? color2 : color1)
            });
    }) 

});