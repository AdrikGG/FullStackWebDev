/** Exercise 02 - Reverse **/

const button = document.getElementById("reverse");

button.onclick = function() {
    const input = document.getElementById("input").value;
    const response = document.getElementById("response");

    if (isNaN(input)) {
        response.style.color = "red";
        response.innerText = "Error: Input must be a number"
        return;
    }

    let inputString = input.toString();
    const length = inputString.replace("-", "").replace(".", "").length;
    if (length !== 8) {
        response.style.color = "red";
        response.innerText = "Error: Please input an 8-digit number"
        return;
    }  

    let reversed = 0;
    let sign = inputString.slice(0, 1);
    inputString = inputString.slice(1);
    reversed = inputString.split("").reverse().join("");
    reversed = sign + reversed;

    response.style.color = "green";
    response.innerText = input + " --> " + reversed;
}