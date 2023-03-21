console.log(document.getElementById("calc"))

document.getElementById("calc").addEventListener("click", () => {
    console.log(11)
    let wallet = parseFloat(document.getElementById('wallet').value);
    let cost = parseFloat(document.getElementById('cost').value);
    let amount = wallet / cost;
    let change = wallet - Math.round(amount) * cost;
    change = (change > 0) ? change : 0;
    document.getElementById('amount').innerText = amount;
    document.getElementById('change').innerText = change;
});







