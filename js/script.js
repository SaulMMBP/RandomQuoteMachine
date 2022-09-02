let data;
let randomQuote;
let quote;
let author;
let colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
];

function getQuotes() {
    const settings = {
        async: true,
        crossDomain: true,
        url: "https://type.fit/api/quotes",
        method: "GET",
    };
    return $.ajax(settings).done((response) => {
        data = JSON.parse(response);
    });
}

function getRandomQuote() {
    let rand = Math.floor(Math.random() * data.length);
    let rand2 = Math.floor(Math.random() * colors.length);

    randomQuote = data[rand];
    quote = randomQuote.text;
    author = randomQuote.author;
    $("#text").html(quote);
    $("#author").html("- " + author);

    $("body").css("background-color", colors[rand2]);
    $("#quote-box").css("color", colors[rand2]);
    $("#tweet-quote").css("color", colors[rand2]);
    $("#new-quote").css("background-color", colors[rand2]);

    $("#tweet-quote").attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            encodeURIComponent('"' + quote + '" ' + author)
    );
}

$(document).ready(function () {
    getQuotes().then(() => {
        getRandomQuote();
    });

    $("#new-quote").on("click", getRandomQuote);
});
