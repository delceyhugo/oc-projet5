// Déclaration des variables

const firstTypeOfQuote = [
    ["De manière générale", "En principe", "D'une façon ou d'une autre", "Souvent", "Aprés tout", "Dans la vie", "De nos jours"],
    [", la relation familiale", ", l'amitié", ", la stabilité", ", le partage", ", la passion", ", le bonheur", ", le temps"],
    [" peu s'estomper", " se complexifie", " disparaît", " s'améliore", " se voile", " fluctue", " change"],
    [" tout comme", " mais fini toujours par", " pour évoluer ensuite vers", " puis meurt pour renaît dans", " mais se développe ensuite vers", " mais peu aussi devenir", " pour ensuite finir par"],
    [" quelque chose de positif !", " une bonne nouvelle.", " une meilleur version de la chose.", " un choix decisif.", " une experience personnel forte !", " une future situation.", " une leçon de vie."]
  ];
  const secondTypeOfQuote = [
    ["Pourquoi", "Ne croyez-vous pas que", "Comment", "Ne vous avais-je pas dit que", "Et si, aprés tout,", "Mais si", "On m'a toujours dit que"],
    [" la reconnaissance", " le chemin", " l'argent", ", le passé", " le présent", " l'évolution", " le temps"],
    [" est dans tout les esprits", " n'est pas tout dans la vie", " n'a pas d'importance", " ne fait pas le bonheur", " est un poids", " est une énergie", " a une importance"],
    [", qu'en est-il pour", " mais concerne plutot", ", tout comme", " mais c'est vraiment", " et c'est quelque chose de", ", qui fini par quelque chose de", ", mais peu devenir"],
    [" le bonheur ?", " encore plus important ?", " la vie ?", " la vérité ?", " vraiment personnel ?", " situationnel ?", " une leçon de vie ?"]
  ];

// Fonction qui génère un entier aléatoire
function getRandomInt() {
    return Math.floor(Math.random() * 7);
}

// Fonction qui génère une citation
function newQuote(numberOfQuote, typeOfQuote){
    typeOfQuote = eval(typeOfQuote);
    let quote = [];
    for (let i = 0; i < numberOfQuote; i++) {
        quote.push(typeOfQuote[0][getRandomInt()] + typeOfQuote[1][getRandomInt()] + typeOfQuote[2][getRandomInt()] + typeOfQuote[3][getRandomInt()] + typeOfQuote[4][getRandomInt()]);
    }
    return(quote);
}


// Récupération paramètres, génération et affichage citation
$( document ).ready(function(){
    $("#button").click(function(){
        $('.quote').empty();
        let numberOfQuotes = $("#selectNumber").val();
        let typeOfQuotes = $("#selectType").val();
        let quotes = newQuote(numberOfQuotes, typeOfQuotes);
        quotes.forEach(function(quote, index) {
            $('.quote' + index).prepend(quote);
        });
    });
});