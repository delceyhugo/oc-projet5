// Déclaration des variables
const firstWords = ["De manière générale", "En principe", "D'une façon ou d'une autre", "Souvent", "Aprés tout", "Dans la vie", "De nos jours"];
const secondWords = [", la relation familiale", ", l'amitié", ", la stabilité", ", le partage", ", la passion", ", le bonheur", ", le temps"];
const thirdWords = [" peu s'estomper", " se complexifie", " disparaît", " s'améliore", " se voile", " fluctue", " change"];
const fourthWords = [" tout comme", " mais fini toujours par", " pour évoluer ensuite vers", " puis meurt pour renaît dans", " mais se développe ensuite vers", " mais peu aussi devenir", " pour ensuite finir par"];
const fifthWords = [" quelque chose de positif !", " une bonne nouvelle.", " une meilleur version de la chose.", " un choix decisif.", " une experience personnel forte !", " une future situation.", " une leçon de vie."];

// Fonction qui génère un entier aléatoire
function getRandomInt() {
    return Math.floor(Math.random() * 7);
}

// Fonction qui génère une citation
function newQuote(numberOfQuote){
    let quote = [];
    for (let i = 0; i < numberOfQuote; i++) {
        quote.push(firstWords[getRandomInt()] + secondWords[getRandomInt()] + thirdWords[getRandomInt()] + fourthWords[getRandomInt()] + fifthWords[getRandomInt()]);
    }
    return(quote);
}

$( document ).ready(function(){
    $("#button").click(function(){
        $('.quote').empty();
        let numberOfQuotes = $("#select").val();
        let quotes = newQuote(numberOfQuotes);
        quotes.forEach(function(quote, index) {
            $('.quote' + index).prepend(quote);
        });
    });
});