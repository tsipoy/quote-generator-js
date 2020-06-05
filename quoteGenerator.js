
let quotes1 = [
    "Do not give up",
    "keep trying",
    "never stop",
    "you will get it"];
let quotes2 = [
    "Try everything",
    "but before you try",
    "think because it will",
    "return back to you"];
let quotes3 = [
    "You will be fine",
    " don't worry",
    "just go there",
    " to much"];
    

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

let randomQuotes = quotes1 + quotes2 + quotes3;
