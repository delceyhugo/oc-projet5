// Déclaration des variables
let firstWords = ["De manière générale", "En principe", "D'une façon ou d'une autre", "Souvent", "Aprés tout", "Dans la vie", "De nos jours"];
let secondWords = [", la relation familiale", ", l'amitié", ", la stabilité", ", le partage", ", la passion", ", le bonheur", ", le temps"];
let thirdWords = [" peu s'estomper", " se complexifie", " disparaît", " s'améliore", " se voile", " fluctue", " change"];
let fourthWords = [" tout comme", " mais fini toujours par", " pour évoluer ensuite vers", " puis meurt pour renaît dans", " mais se développe ensuite vers", " mais peu aussi devenir", " pour ensuite finir par"];
let fifthWords = [" quelque chose de positif !", " une bonne nouvelle.", " une meilleur version de la chose.", " un choix decisif.", " une experience personnel forte !", " une future situation.", " une leçon de vie."];

// Fonction qui génère un entier aléatoire
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Fonction qui génère une citation
function newQuote(numberOfQuote){
    let quote = [];
    for (let i = 0; i < numberOfQuote; i++) {
        quote.push(firstWords[getRandomInt(0,7)] + secondWords[getRandomInt(0,7)] + thirdWords[getRandomInt(0,7)] + fourthWords[getRandomInt(0,7)] + fifthWords[getRandomInt(0,7)]);
    }
    return(quote);
}