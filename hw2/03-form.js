/** Exercise 03 - Form **/

const submit = document.getElementById("submit");

submit.onclick = function (e) {
  e.preventDefault();
  let ok = true;
  if (document.getElementById("namefield").value.length === 0) {
    document.getElementById("namefield").style.borderColor = "red";
    document.getElementById("nameerror").innerText = "Name is required";
    document.getElementById("nameerror").hidden = false;
    ok = false;
  } else {
    document.getElementById("namefield").style.borderColor = "#ced4da";
    document.getElementById("nameerror").hidden = true;
  }
  if (document.getElementById("emailfield").value.length === 0) {
    document.getElementById("emailfield").style.borderColor = "red";
    document.getElementById("emailerror").innerText = "Email is required";
    document.getElementById("emailerror").hidden = false;
    ok = false;
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(document.getElementById("emailfield").value)) {
    document.getElementById("emailfield").style.borderColor = "red";
    document.getElementById("emailerror").innerText = "Enter a valid email address";
    document.getElementById("emailerror").hidden = false;
    ok = false;
  } else {
    document.getElementById("emailfield").style.borderColor = "#ced4da";
    document.getElementById("emailerror").hidden = true;
  }
  if (!ok) {
    return;
  }
  console.group("========= Form Submission =========");
  console.log("Name: " + document.getElementById("namefield").value);
  console.log("Email: " + document.getElementById("emailfield").value);
  console.log("Feedback: " + document.getElementById("message").value);
  console.log(
    "Newsletter: " +
      (document.getElementById("newsletter").checked
        ? "Yes, I would like to join the newsletter."
        : "No, thank you.")
  );
  console.groupEnd();
};

const reset = document.getElementById("reset");

reset.onclick = function () {
  document.getElementById("namefield").value = "";
  document.getElementById("emailfield").value = "";
  document.getElementById("message").value = "";
  document.getElementById("newsletter").checked = false;
};
