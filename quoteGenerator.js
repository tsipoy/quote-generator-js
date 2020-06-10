
let quotes1 = [
    "do not give up,",
    "keep trying,",
    "never stop,",
    "you will get it,"];
let quotes2 = [
    "try everything,",
    "but before you try,",
    "think because it will,",
    "return back to you"];
let quotes3 = [
    "you will be fine,",
    " don't worry,",
    "just go there,",
    " to much,"];

let randomIndex1 = Math.floor(Math.random() * quotes1.length);
let randomIndex2 = Math.floor(Math.random() * quotes2.length);
let randomIndex3 = Math.floor(Math.random() * quotes3.length);

let string1 = quotes1[randomIndex1];
let string2 = quotes1[randomIndex2];
let string3 = quotes1[randomIndex3];

let quote = `${string1} ${string2} ${string3}`;

const generatedQuote = () => {
    let randomIndex1 = Math.floor(Math.random() * quotes1.length);
    let randomIndex2 = Math.floor(Math.random() * quotes2.length);
    let randomIndex3 = Math.floor(Math.random() * quotes3.length);
    let string1 = quotes1[randomIndex1];
    let string2 = quotes1[randomIndex2];
    let string3 = quotes1[randomIndex3];
    let quote = `${string1} ${string2} ${string3}`;
    return quote;
}


/*  
function randomQuote(quotes1) {
    return quotes1[Math.floor(Math.random() * quotes1.length)];
 }
 console.log(randomQuote(quotes1));

function randomQuote(quotes2) {
    return quotes2[Math.floor(Math.random() * quotes2.length)];
 }
 console.log(randomQuote(quotes2));
 
 function randomQuote(quotes3) {
    return quotes3[Math.floor(Math.random() * quotes3.length)];
 }
 console.log(randomQuote(quotes3))

let randomQuotes = randomQuote(quotes1) + randomQuote(quotes2) + randomQuote(quotes3);

console.log(randomQuotes);
*/

//1. use prompt to ask the user how many times we want to generate a random quote
const quotesNumber = Number(prompt("How many quotes do you want to generate (1 to 5"));
//2. check if the prompt give us something between 1 and 5
if (quotesNumber >= 1  && quotesNumber <= 5) {
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
for(let i = 0; i < quotesNumber; i++) { 
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes
let quote = generatedQuote();
		console.log(quote);
	}

    let quote = generatedQuote();
} else {
    console.error('We need a number between 1 and 5');
}

let randomQuote = Number(prompt('Choose between 2 types of quote generator'));
function random (randomQuotes) {
        let generatedQuote = 0;
    while (generatedQuote < 3) {
        if (generatedQuote == "yes") {
            generatedQuote ++;
        } else {
            break;
        }
   }
   return generatedQuote * randomQuotes;
}
console.log(quote);
