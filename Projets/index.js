// Variable qui récupère l'élément où l'iD est add puis fait l'opération avec le nombre A et B
const addButton = document.getElementById("add");
addButton.addEventListener("click", function() {
    const numberA = Number(document.getElementById("a").value);
    const numberB = Number(document.getElementById("b").value);
    document.getElementById("result").value = numberA + " + " + numberB + " = " + (numberA + numberB);
});

// Variable qui récupère l'élément où l'iD est minus puis fait l'opération avec le nombre A et B
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function() {
    const numberA = Number(document.getElementById("a").value);
    const numberB = Number(document.getElementById("b").value);
    document.getElementById("result").value = numberA + " - " + numberB + " = " + (numberA - numberB);
});

// Variable qui récupère l'élément où l'iD est multipliate puis fait l'opération avec le nombre A et B
const multiplyButton = document.getElementById("multipliate");
multiplyButton.addEventListener("click", function() {
    const numberA = Number(document.getElementById("a").value);
    const numberB = Number(document.getElementById("b").value);
    document.getElementById("result").value = numberA + " * " + numberB + " = " + (numberA * numberB);
});

// Variable qui récupère l'élément où l'iD est divise puis fait l'opération avec le nombre A et B
const diviseButton = document.getElementById("divise");
diviseButton.addEventListener("click", function() {
    const numberA = Number(document.getElementById("a").value);
    const numberB = Number(document.getElementById("b").value);
    document.getElementById("result").value = numberA + " / " + numberB + " = " + (numberA / numberB);
});


const fruitTab = document.getElementById("cart-table");
let prixAnanas = 3.80;
let prixAvocat = 1.69;
let prixCassis = 5.95;
let prixBanane = 1.13;
let prixPomme = 1.30;
let prixFraise = 4.99;
let prixKiwi = 2.99;
let prixOrange = 2.19;
let prixPoire = 2.40;
let prixRaisin = 3.99;
let prixMangue = 3.99;
let prixPeche = 5.49;
let prixTotal = 0;

const fruitAnanas = document.getElementById("addAnanas");
fruitAnanas.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Ananas";
    prixTotal += prixAnanas
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitAvocat = document.getElementById("addAvocat");
fruitAvocat.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Avocat";
    prixTotal += prixAvocat
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitCassis = document.getElementById("addCassis");
fruitCassis.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Cassis";
    prixTotal += prixCassis
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitBanane = document.getElementById("addBanane");
fruitBanane.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.textContent = "Banane";
    prixTotal += prixBanane
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€" 
});

const fruitPomme = document.getElementById("addPomme");
fruitPomme.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.textContent = "Pomme";
    prixTotal += prixPomme
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitFraise = document.getElementById("addFraise");
fruitFraise.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Fraise";
    prixTotal += prixFraise
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitKiwi = document.getElementById("addKiwi");
fruitKiwi.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Kiwi";
    prixTotal += prixKiwi
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitOrange = document.getElementById("addOrange");
fruitOrange.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Orange";
    prixTotal += prixOrange
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitPoire = document.getElementById("addPoire");
fruitPoire.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Poire";
    prixTotal += prixPoire
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitRaisin = document.getElementById("addRaisin");
fruitRaisin.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Raisin";
    prixTotal += prixRaisin
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitMangue = document.getElementById("addMangue");
fruitMangue.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Mangue";
    prixTotal += prixMangue
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const fruitPeche = document.getElementById("addPeche");
fruitPeche.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Pêche";
    prixTotal += prixPeche
    document.getElementById("Total").innerHTML = prixTotal.toFixed(2) + "€"
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    document.getElementById('cart-table').innerHTML = "";
    document.getElementById('Total').innerHTML = "";
    prixTotal = 0
});