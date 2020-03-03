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
    [", qu'en est-il pour", " mais concerne plutot", ", un peu comme", " mais dans ce cas, qu'est-ce que", " mais que c'est quelque chose qui concerne", ", est-ce comme", ", qu'en est t'il pour"],
    [" le bonheur ?", " les émotions ?", " la vie ?", " la vérité ?", " le futur ?", " la conscience ?", " les leçons de vie ?"]
  ];

// Fonction qui génère un entier aléatoire
function getRandomInt() {
    return Math.floor(Math.random() * 7);
}

// Fonction qui génère une citation
function newQuote(numberOfQuote, typeOfQuote){
    let quote = [];
    switch (typeOfQuote){
        case 'firstTypeOfQuote':
            for (let i = 0; i < numberOfQuote; i++) {
                quote.push(firstTypeOfQuote[0][getRandomInt()] + firstTypeOfQuote[1][getRandomInt()] + firstTypeOfQuote[2][getRandomInt()] + firstTypeOfQuote[3][getRandomInt()] + firstTypeOfQuote[4][getRandomInt()]);
            }
            break;
        case 'secondTypeOfQuote':
            for (let i = 0; i < numberOfQuote; i++) {
                quote.push(secondTypeOfQuote[0][getRandomInt()] + secondTypeOfQuote[1][getRandomInt()] + secondTypeOfQuote[2][getRandomInt()] + secondTypeOfQuote[3][getRandomInt()] + secondTypeOfQuote[4][getRandomInt()]);
            }
            break;
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