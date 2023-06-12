

$(document).ready(function() {
    $('button').click(function() {

        $('div').append(`<h1 style="font-size:100px;">There is no such thing as 'many dogs'</h1>`)
        for (let i = 0; i < 100; i++) {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json().then(response => {
                $('div').append(`<img src="${response.message}" height="100" width="100"> </img>`)
            }));

        }
    });
});

