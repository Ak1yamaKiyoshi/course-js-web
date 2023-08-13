function handleButtonClick() {
    let cost = document.getElementById("cost").value;
    let wallet = document.getElementById("wallet").value;
    let amount = Math.floor(wallet / cost);
    document.getElementById("amount").innerText = amount;
    document.getElementById("change").innerText = wallet - amount * cost;
}