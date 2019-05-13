window.onload = Quote;

function Quote() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://thatsthespir.it/api", true);

    xhr.onload = function() {
        if (this.status == 200) {
            let randomQuote = JSON.parse(this.response);
            console.log(randomQuote);
            console.log(randomQuote.quote);
            console.log(randomQuote.paragraph);

            let quoteTitle = document.getElementById("title");
            let quoteGraph = document.getElementById("paragraph");
            let quotePicture = document.getElementById("picture");

            quoteTitle.innerHTML = randomQuote.quote;
            quoteGraph.innerHTML = randomQuote.slug;
            quotePicture.setAttribute("src", randomQuote.photo);
        }
    }

    xhr.onerror = function() {
        console.log("An error has occurred during request...")
    }

    xhr.send();
}