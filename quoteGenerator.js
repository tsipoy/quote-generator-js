console.log('it works!');
/* Set quotes */
let myQuote1 = ["Don't give up, keep trying, never stop and you will get it."," Don't give up, keep trying, never stop and you will get it.", " Try everything but before you try, think because it willl return back to you.", "You will be fine don't worry to much, just go there"];


/* Call the function for each element */ 
myQuote1.forEach(myQuote1 => {
        console.log(myQuote1);
      });

let myQuote2 = [" The purpose of our lives is to be happy.", "  Life is what happens when you're busy making other plans.", " Get busy living or get busy dying."]; 

myQuote2.forEach(myQuote2 => {
    console.log(myQuote2);
});

let myQuote3 = ["You only live once, but if you do it right, once is enough.", " If you want to live a happy life, tie it to a goal, not to people or things.", " Never let the fear of striking out keep you from playing the game."];

myQuote3.forEach(myQuote3 => {
    console.log(myQuote3);
})

let myQuote4 = ["Not how long, but how well you have lived is the main thing.", " If life were predictable it would cease to be life, and be without flavor.", " The whole secret of a successful life is to find out what is one’s destiny to do, and then do it."];

myQuote4.forEach(myQuote4 => {
    console.log(myQuote4);
})

  
let myQuote5 = ["In order to write about life first you must live it.", " The big lesson in life, baby, is never be scared of anyone or anything.", " Life is not a problem to be solved, but a reality to be experienced."];

myQuote5.forEach(myQuote5 => {
    console.log(myQuote5);
})



var quotes = [myQuote1, myQuote2, myQuote3, myQuote4, myQuote5];

/* Return the each quote within a range */
function generateQuote () {
     let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
}


 
