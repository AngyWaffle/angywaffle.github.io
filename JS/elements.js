const { json } = require("body-parser");

const apiUrl = 'JSON/main-page-links.json'

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(myObj => {
    myObj.pages.forEach(element => {
        var divs = (`<div class="project">
        <img src=${element.imgsrc} alt="Bilde av prosjektet sin forside"/>
        <p class="nocursor">${element.texttext}</p>
        <button class="button" onClick="redirect('${element.redirects}')">${element.buttontext}</button>
        </div>`)
        document.getElementById(element.id).innerHTML += divs;
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });