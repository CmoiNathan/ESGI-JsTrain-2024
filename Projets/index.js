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

const fruitAnanas = document.getElementById("addAnanas");
fruitAnanas.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Ananas";
});

const fruitAvocat = document.getElementById("addAvocat");
fruitAvocat.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Avocat";
});

const fruitCassis = document.getElementById("addCassis");
fruitCassis.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Cassis";
});

const fruitBanane = document.getElementById("addBanane");
fruitBanane.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.textContent = "Banane";
});

const fruitPomme = document.getElementById("addPomme");
fruitPomme.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.textContent = "Pomme";
});

const fruitFraise = document.getElementById("addFraise");
fruitFraise.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Fraise";
});

const fruitKiwi = document.getElementById("addKiwi");
fruitKiwi.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Kiwi";
});

const fruitOrange = document.getElementById("addOrange");
fruitOrange.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Orange";
});

const fruitPoire = document.getElementById("addPoire");
fruitPoire.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Poire";
});

const fruitRaisin = document.getElementById("addRaisin");
fruitRaisin.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Raisin";
});

const fruitMangue = document.getElementById("addMangue");
fruitMangue.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Mangue";
});

const fruitPeche = document.getElementById("addPeche");
fruitPeche.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Pêche";
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    document.getElementById('cart-table').innerHTML = "";
});