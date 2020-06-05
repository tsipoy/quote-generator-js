
console.log('it works!');

const quotes = [
    "Don't give up, keep trying, never stop and you will get it.",
    " Don't give up, keep trying, never stop and you will get it.", 
    " Try everything but before you try, think because it will return back to you.", 
    "You will be fine don't worry to much, just go there"
];

function randomQuote(quotes) {
   return quotes[Math.floor(Math.random() * quotes.length)];
}

console.log(randomQuote(quotes));
