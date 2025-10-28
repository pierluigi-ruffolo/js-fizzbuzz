/* cicliamo i numeri da 1 a 100 */
/*  se un numero è divisibile per  3 e 5 stampiamo  FizzBuzz*/
/*  se un numero è divisibile per  3  stampiamo  Fizz*/
/* se un numero è divisibile per  5 stampiamo  buzz*/
/* se il numero non è divisibile né per 3 né per 5 stampiamo il numero stesso */

let numero = "";
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    /*controlliamo se il numero è divisibile per   3 e 5 stampiamo  FizzBuzz */
    numero = "fizz buzz";
  } else if (i % 3 === 0) {
    /*controlliamo se il numero è divisibile per   3 e  stampiamo  Fizz */
    numero = "fizz";
  } else if (i % 5 === 0) {
    /*controlliamo se il numero è divisibile per   5 e  stampiamo  buzz */
    numero = "buzz";
  } else {
    /* altrimenti stampiamo solo il numero */
    numero = i;
  }
  console.log(numero);
}
