let currencies= {"U.S. dollar":"USD","Euro":"EUR","Japanese yen":	"JPY","Sterling":"GBP","Renminbi":"CNY","Australian dollar":"AUD","Canadian dollar":"CAD","Swiss franc":"CHF","Hong Kong dollar":"HKD","Singapore dollar":"SGD","Swedish krona":"SEK","South Korean won":"KRW","Norwegian krone": "NOK","New Zealand dollar	": "NZD","Indian rupee": "INR","Mexican peso": "MXN","New Taiwan dollar": "TWD","South African rand": "ZAR","Brazilian real": "BRL","Danish krone": "DKK","Polish złoty": "PLN","Thai baht": "THB","Israeli new shekel": "ILS","Indonesian rupiah": "IDR","Czech koruna": "CZK","UAE dirham": "AED","Turkish lira": "TRY","Hungarian forint": "HUF","Chilean peso": "CLP","Saudi riyal": "SAR","Philippine peso": "PHP","Malaysian ringgit": "MYR","Colombian peso": "COP","Russian ruble": "RUB","Romanian leu": "RON"}

$(window).on('load', function() {
    for (const [currency, currency_code] of Object.entries(currencies)) {
        ['#select_currency_out', '#select_currency_in'].forEach(element => {
            $(`${element}`).append(new Option(currency, currency_code));
        });
    }
});

$(document).ready(function() {
    $('#select_currency_out, #select_currency_in').click(function() {
        fetch(`https://api.exchangerate-api.com/v4/latest/${$('#select_currency_in :selected').val()}`)
        .then(res => {return res.json();})
        .then(res => {
            let total = res.rates[$('#select_currency_out :selected').val()] * $('#currency_in input').val();
            if ($('#select_currency_in :selected').val() == 'RUB') total /= 1000;
            if ($('#select_currency_out :selected').val() == 'RUB') total *= 1000;
            $('#currency_out p').text(total);
            console.log(    )
        });
    });
});