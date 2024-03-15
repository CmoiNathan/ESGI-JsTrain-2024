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
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitAvocat = document.getElementById("addAvocat");
fruitAvocat.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Avocat";
    prixTotal += prixAvocat
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitCassis = document.getElementById("addCassis");
fruitCassis.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Cassis";
    prixTotal += prixCassis
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitBanane = document.getElementById("addBanane");
fruitBanane.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.textContent = "Banane";
    prixTotal += prixBanane
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€" 
});

const fruitPomme = document.getElementById("addPomme");
fruitPomme.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.textContent = "Pomme";
    prixTotal += prixPomme
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitFraise = document.getElementById("addFraise");
fruitFraise.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Fraise";
    prixTotal += prixFraise
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitKiwi = document.getElementById("addKiwi");
fruitKiwi.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Kiwi";
    prixTotal += prixKiwi
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitOrange = document.getElementById("addOrange");
fruitOrange.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Orange";
    prixTotal += prixOrange
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitPoire = document.getElementById("addPoire");
fruitPoire.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Poire";
    prixTotal += prixPoire
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitRaisin = document.getElementById("addRaisin");
fruitRaisin.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Raisin";
    prixTotal += prixRaisin
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitMangue = document.getElementById("addMangue");
fruitMangue.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Mangue";
    prixTotal += prixMangue
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const fruitPeche = document.getElementById("addPeche");
fruitPeche.addEventListener("click",function(){
    let newRow = fruitTab.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Pêche";
    prixTotal += prixPeche
    document.getElementById("Total").innerHTML = "Total : " + prixTotal.toFixed(2) + "€"
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    document.getElementById('cart-table').innerHTML = "";
    document.getElementById('Total').innerHTML = "";
    prixTotal = 0;
});




let promesse = new Promise((resolve,reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => resolve("Opération réussie"), 1000);
  } else {
    reject ("Opération échouée");
  }
});


//Initie  les clés pour l'API
const apiKey = "161593092f55fb2916220135c80b74e9";
const cityId = "2996944";
                
function fetchWeather(cityId, apiKey) {

    //retour de l'appel de la fonction fetch
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`)

         //Tente de résoudre la promesse avec then, et reçoit la promesse
        .then(response => response.json())
        .then(data => {

            //Déclaration des variables
            let ville = "Données non disponibles";
            let temps = "Données non disponibles";
            let meteo = "Données non disponibles";
            let pays = "Données non disponibles"
            
            //Affectation des valeurs au variables, /!\ chaque valeurs dépends de son API
            ville = data.name;
            temps = data.main.temp;
            meteo = data.weather[0].description;
            pays = data.sys.country;
            
            //Affichage des valeurs sur notre page web au bon endroit
            document.getElementById("city").innerHTML = ville;
            document.getElementById("temp").innerHTML = temps;
            document.getElementById("temperature_min").innerHTML = meteo;
            document.getElementById("country").innerHTML = pays;
        })

        //Si erreur 
        .catch(error => {
            console.log('Erreur', error);
        });
}


//Actualise toutes les secondes les inforamtions de la fonction
setInterval(function() {
    fetchWeather(cityId, apiKey);
}, 1000); 




document.addEventListener("DOMContentLoaded", () => {
    const ButtonSW = document.getElementById("SWbuttons");
    const SummarySW = document.getElementById("SWsummary");

    function SWbuttons() {
        fetch("https://swapi.dev/api/films/")
            .then(response => response.json())
            .then(data => {
                data.results.forEach(film => {
                    const button = document.createElement("button");
                    button.textContent = film.title;
                    button.style.marginRight = "5px";
                    button.addEventListener("click", () => SWdetails(film.url));
                    ButtonSW.appendChild(button);
                });
            })
            .catch(error =>
                console.error("Erreur lors de la récupération des films :", error)
            );
    }

    function SWdetails(url) {
        fetch(url)
            .then(response => response.json())
            .then(film => {
                SummarySW.innerHTML = `
                <div class="film-details">
                <h2 class="film-title">${film.title}</h2>
                <div>
                    <p class="detail"><strong>Date de sortie :</strong> ${film.release_date}</p>
                    <p class="detail"><strong>Réalisateur :</strong> ${film.director}</p>
                    <p class="detail"><strong>Producteurs :</strong> ${film.producer}</p>
                </div>
                <div class="summary">
                    <p><strong>Résumé :</strong> ${film.opening_crawl}</p>
                </div>
                <div id="listCharacters"></div>
            </div>`;
      
                SWcharacters(film.characters);
            })
            .catch(error =>
                console.error("Erreur lors de la récupération des détails du film :", error)
            );
    }

    SWbuttons(); 
});

    function SWcharacters(url) {
        url.forEach(url => {
            fetch(url)
                .then(response => response.json())
                .then(SWcharacters => {
                    document.getElementById('listCharacters').innerHTML += `
                        <h2>${SWcharacters.name}</h2>
                        <p><strong>Genre :</strong> ${SWcharacters.gender}</p>
                        <p><strong>Année de naissance :</strong> ${SWcharacters.birth_year}</p>
                        <p><strong>Couleurs des yeux :</strong> ${SWcharacters.eye_color}</p>
                        <p><strong>Taille :</strong> ${SWcharacters.height} cm</p>
                        <p><strong>Poids :</strong> ${SWcharacters.mass} kg</p>
                        <hr>`;
                })
                .catch(error =>
                    console.error("Erreur lors de la récupération des personnages du film :", error)
                );
        });
    }
