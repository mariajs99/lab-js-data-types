/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = `"${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}"`;

// Print out the concatenated string
console.log (tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let part1CamelTail = part1.slice(0, part1.length - 1) + part1[part1.length - 1].toUpperCase();
let part2CamelTail = part2.slice(0, part2.length - 1) + part2[part2.length - 1].toUpperCase();

let result = `"${part1CamelTail}${part2CamelTail}"`;

// Print the cameLtaiL-formatted string

console.log (result);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipAmount = billTotal * 0.15;


// Print out the tipAmount

console.log ("The amount you have to leave as a tip is: " + tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Print the generated random number

console.log (randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//Expression1 es falsa, porque && indica que ambas tienen que ser verdaderas para devolver true.
console.log ("Expresión 1: " +expression1);

const expression2 = a || b;
//Expression2 es verdadera, porque || indica que con que alguna de las dos sea verdadera 
// (en este caso a es verdadera), devuelve true.
console.log("Expresión 2: " + expression2);

const expression3 = !a && b;
//Expression3 es falsa, porque ambos valores son falsos y 
// para que una expresión con &&, ambas tienen que ser verdaderas.
console.log("Expresión 3: " + expression3);

const expression4 = !(a && b);
//Expression4 es verdadera, porque (a && b) es igual a false, 
// pero ! indica que esa expresión es lo contrario, es decir, verdadera.
console.log("Expresión 4: " + expression4);

const expression5 = !a || !b;
//Expression5 es verdadera, porque !a = false, pero !b = true, 
// por lo tanto, al menos una es verdadera y devuelve true.
console.log("Expresión 5: " + expression5);

const expression6 = !(a || b);
//Expression6 es falsa, porque (a || b) = true pero el 
//* ! al inicio invierte el resultado y la convierte en falsa.
console.log("Expresión 6: " + expression6);

const expression7 = a && a;
//Expression7 es verdadera porque a es true, por tanto, true && true = true.
console.log("Expresión 7: " + expression7);
