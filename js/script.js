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

let userName = document.getElementById("userName");

let userDistance = document.getElementById("userDistance");

let userAge = document.getElementById("userAge");



button_create.addEventListener("click", function() {
console.log(userName.value)
console.log(userDistance.value)
alert(userAge.selectedIndex);
});