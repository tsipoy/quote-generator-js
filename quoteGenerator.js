/*
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
/*
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
*/


// happy quotes
const happyQuotes = [
	[
		'Amateurs look for inspiration;',
		'We have to be honest about what we want',
		'All my life, I kept waiting for things to get better',
		'Accidents happen',
		'Either be a good parent',
	],
	[
		'the rest of us just',
		'and take risks rather than lie to ourselves',
		'But a funny thing happened while I was waiting for the world to change',
		'Our bones shatter, our skin splits, our hearts break',
		'to your career or ',
	],
	[
		'get up and go to work.',
		'and make excuses to stay in our comfort zone.',
		"Because I didn't change it.",
		'We burn, we drown, we stay alive.',
		'just give your dream up for adoption.',
		'get up and go to work.',
		'and make excuses to stay in our comfort zone.',
		"Because I didn't change it.",
		'We burn, we drown, we stay alive.',
		'just give your dream up for adoption.',
		'get up and go to work.',
		'and make excuses to stay in our comfort zone.',
		"Because I didn't change it.",
		'We burn, we drown, we stay alive.',
		'just give your dream up for adoption.',
	],
];
const sadQuotes = [
	[
		'It made me realize that Beatrice had changed;',
		"Don't mistake me for a friend",
		'With the Smithies, it was different',
		'One of the hallmarks of social wellness',
		'Only by binding together',
	],
	[
		'that she did not spoke her mind',
		'because I sometimes',
		'was sometimes no telling where one of them',
		'is being inclusive, not exclusive,',
		'as a single force',
	],
	[
		'it was not the real deal.',
		'choose to be friendly.',
		'began and the others left off.',
		'with our friendship.',
		'will we remain strong and unconquerable.',
	],
];
const generateQuote = (quotesArray) => {
	let randomIndex1 = Math.floor(Math.random() * quotesArray[0].length);
	let randomIndex2 = Math.floor(Math.random() * quotesArray[1].length);
	let randomIndex3 = Math.floor(Math.random() * quotesArray[2].length);
	let string1 = quotesArray[0][randomIndex1];
	let string2 = quotesArray[1][randomIndex2];
	let string3 = quotesArray[2][randomIndex3];
	const generatedQuote = `Generated quote : "${string1} ${string2} ${string3}"`;
	return generatedQuote;
};
let continueProgram = 'yes';
while (continueProgram === 'yes') {
	let numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
	while (numberOfQuotes < 0 || numberOfQuotes > 5) {
		numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
	}
	let typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
	while (typeOfQuote !== 'happy' && typeOfQuote !== 'sad') {
		typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
	}
	let alertText = '';
	if (typeOfQuote === 'happy') {
		for (let i = 0; i < numberOfQuotes; i++) {
			alertText += '\n' + generateQuote(happyQuotes) + '\n';
		}
	} else {
		for (let i = 0; i < numberOfQuotes; i++) {
			alertText += '\n' + generateQuote(sadQuotes) + '\n';
		}
	}
	alert(alertText);
	continueProgram = prompt('Do you want to run the program again? (yes, no)');
}
alert('Thank you for using my quote generator ❤️');

