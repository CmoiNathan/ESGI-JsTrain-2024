# Développement web : javascript,web api fetch et json

<u>B1 ESGI INI</u>

## Introduction à javascript

### Rôle de javascript

Javascript permet de mettre un jour l'interface web sans passer par le serveur, ameliorer l'éxperience du visiteur. Il est éxecuter par le navigateur web. Il rajoute également de l'intéractivité aux pages, c'est un language orienté objet utilisé par la plupart des sites.<br>
On peut notamment faire :
- Client lourd : logiciel (ex : logiciel d'installation)
- Application web
- Mobile <br>
=> Le tout avec la même syntaxe

API  = interface qui permet de manipuler ce qu'il ce passe dans un navigateur avec du code

Le client dans une app js est le navigateur

runtime = environnement d'éxécution du javascript (nous navigateur)

<a href="https://developer.mozilla.org/fr/">Site utile pour le dev</a>

## Mais avant : Git
Une branche = historique des sauvegarde <br><br>
Pour commencer :
```
git init
```
Pour ajouter un fichier au suivi Git : 
```js
git add <nom du fichier>
```
Pour ajouter tous les fichiers au suivi Git :
```js
git add .
```
Pour valider les modifications et les ajouter à l'historique :
```js
git commit -m "Message de validation"
```
Pour vérifier l'état du dépot : 
```js
git status
```

## Declaration de variable en js

var, let et const
```js
var test = "test"; // A ne pas utiliser pour l instant
```

```js
let test2 = "test2"; // Déclarable une fois mais pas deux
```

```js
const test3 = "test3"; // Pas modifiable c est constant
```

## Séléctionner des éléments
- Par ID :
```js
let elements = document.getElementsById("monId");
```
- Par classe :
```js
let elements = document.getElementsByClassName("maClasse");
```
- Par Balise :
```js
let elements = document.getElementsByTagName("p");
```
### Modifier un éléments
- Changer le texte :
```js
document.getElementById("monId").textContent = "Nouveau texte !";
```
etc
### Ecouter et réagir aux événements
- Ajouter un écouteur d'événements :
```js
document.getElementById("monBouton").addEventListener("click", function () {
    alert("Bouton cliqué !");
});
```
Ici "function()" est un callback qui est une fonction qui est passé en paramètre dans une autre fonction

