function readOnly() {
    document.getElementById("profit").readOnly = true;
}
function listen() {
    document.addEventListener('keydown', Check);
}
function Check(e) {
    var keyCode = (event.key);
    if (keyCode == '+' || keyCode == '-') {
        e.preventDefault()
    }
}
function Calculate() {
    let sales=Number(document.getElementById('sales').value);
    if (sales<=100000000) {
        profit = sales*5/100;
    } else if (sales>100000000&&sales<=300000000) {
        profit = sales*10/100;
    } else {
        profit = sales*20/100;
    }
    document.getElementById('profit').value = profit
}

