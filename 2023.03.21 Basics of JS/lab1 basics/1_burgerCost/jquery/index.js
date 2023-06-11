$(document).ready(function() {
    $('body button').click(function() {
        wallet = parseFloat($('#wallet').val())
        cost = parseFloat($('#cost').val())
        amount = wallet / cost
        change = wallet - Math.round(amount) * cost
        change = (change > 0) ? change : 0
        $('#amount').text(amount);
        $('#change').text(change)
    });
});
