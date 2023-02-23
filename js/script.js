/* 
1 Chiedere il nome del passeggero
2 chiedere km da percorrere
3 chiedere l'età
4 calcolare il prezzo del biglietto in base alla distanza da percorrere considerando
il prezzo di 0.21€/km.
   * Se l'età del passeggero è minore di 18 anni applicare uno sconto del 20%
   * Se l'età è maggiore di 65 anni applicare uno sconto del 40%
5 generare biglietto con i dati del passeggero e il prezzo
*/


let button_create = document.getElementById("button-create")


button_create.addEventListener("click", function() {
    
    let userName = document.getElementById("userName").value;
    
    let userDistance = document.getElementById("userDistance").value;
    
    let userAge = document.getElementById("userAge").selectedIndex;
    
    let emptyName = document.getElementById("emptyName");
    
    let emptyPrice = document.getElementById("emptyPrice");

    let sale = "Prezzo standard";

    let position = document.getElementById("position");

    let numberTicket = document.getElementById("numberTicket");

    let display = document.getElementById("none")

    ticketPrice = userDistance * 0.21;
    
    if (userAge == 1) {
        ticketPrice = ticketPrice * 80 / 100;
        sale = "Sconto bimbi!";
    } else if (userAge == 2) {
        ticketPrice = ticketPrice
    } else if (userAge == 3) {
        ticketPrice = ticketPrice * 60 / 100;
        sale = "Sconto vecchi!";
    }

    document.getElementById("emptySale").innerHTML = sale;

    ticketPrice = ticketPrice.toFixed(2)

    emptyName.innerHTML = userName;

    emptyPrice.innerHTML = ticketPrice + "€";

    position.innerHTML = Math.floor(Math.random() * 10 + 1);

    numberTicket.innerHTML = Math.floor(Math.random() * 100000 + 1);

    display.style.display = "flex"

});
