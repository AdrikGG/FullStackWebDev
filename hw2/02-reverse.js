/** Exercise 02 - Reverse **/

const input = document.getElementById("input");
const submit = document.getElementById("reverse");

const reverse = (input) => {
    if (isNaN(input)) {
        return "Error: Input must be a number";
    }

    let length = String(input).replace("-", "").length;
    if (length !== 8) {
        return "Error: Please input an 8-digit number";
    }

    let reversed = 0;
    let currDigit = 0;
    while (input) {
        currDigit = input % 10;
        reversed = (reversed * 10) + currDigit;
        input = Math.floor(input / 10);
    }

    return input + " --> " + reversed;
}