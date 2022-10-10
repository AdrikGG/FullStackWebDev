/** Exercise 03 - Form **/

const submit = document.getElementById("submit");

submit.onclick = function() {
    console.group("========= Form Submission =========");
    console.log("Name: " + document.getElementById("namefield").value);
    console.log("Email: " + document.getElementById("emailfield").value);
    console.log("Feedback: " + document.getElementById("message").value);
    console.log("Newsletter: " + (document.getElementById("newsletter").checked ? "Yes, I would like to join the newsletter." : "No, thank you."));
    console.groupEnd();
}

const reset = document.getElementById("reset");

reset.onclick = function() {
    document.getElementById("namefield").value = "";
    document.getElementById("emailfield").value = "";
    document.getElementById("message").value = "";
    document.getElementById("newsletter").checked = false;
}
