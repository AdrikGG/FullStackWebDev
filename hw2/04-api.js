/** Exercise 04 - API **/

const url = "https://restcountries.com/v3.1/all";

async function getData(url) {
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    console.log(json[0].name.common, json[0].population);

    json.sort((a, b) => a.name.common.localeCompare(b.name.common));
    const ol = document.getElementById("results");
    for (let country of json) {
      const li = document.createElement("li");
      li.innerText = `${
        country.name.common
      } - ${country.population.toLocaleString("en-us")}`;
      ol.appendChild(li);
    }
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

getData(url);
