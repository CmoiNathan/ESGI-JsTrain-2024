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



