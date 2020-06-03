## The way I create the quote generator.

- I set let myQuote which have five quotes and it contains three sentences.

- Then I set: 
myQuote1.forEach(myQuote1 => {
   console.log(myQuote1);
      }); to call the function so the rader will see it when we set the console log.

- Then lastely, I return the each quote so I use:
function generateQuote () {
     let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
} 

