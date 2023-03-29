const pricePerKm = 0.21;

document.getElementById("stampa").onclick = function generateTicket(){
    let age = parseInt(document.getElementById("age").value);
    let km = parseInt(document.getElementById("km").value);
    let fullPrice = km * pricePerKm;

    if (age <= 18){
        document.getElementById("price").innerHTML = (fullPrice * 0.8).toFixed(2) + "&euro;";
    } else if (age >= 65) {
        document.getElementById("price").innerHTML = (fullPrice * 0.6).toFixed(2) + "&euro;";
    } else {
        document.getElementById("price").innerHTML = fullPrice.toFixed(2) + "&euro;";
    }
}