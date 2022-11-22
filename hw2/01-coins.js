/** Exercise 01 - Coins **/

const calculateChange = (input) => {
  if (input > 10) {
    return "Input is too high! ($10 limit)";
  }
  if (isNaN(input)) {
    return "Input must be a number!";
  }

  input = Math.floor(input * 100);

  const dollars = Math.floor(input / 100);
  input -= dollars * 100;
  const quarters = Math.floor(input / 25);
  input -= quarters * 25;
  const dimes = Math.floor(input / 10);
  input -= dimes * 10;
  const nickels = Math.floor(input / 5);
  input -= nickels * 5;
  const pennies = Math.floor(input / 1);

  const resp =
    dollars +
    " dollars, " +
    quarters +
    " quarters, " +
    dimes +
    " dimes, " +
    nickels +
    " nickels, " +
    pennies +
    " pennies";
  return resp;
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
