
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
    
function oppg5() {
    location.href = "oppgave_5/index.html"
}

//external links need seperate functions
function angywaffle() {
    location.href = "https://angywaffle.no/tempstore";
}

//download function
function calc7() {
    location.href = "calculator/calcbeta7(werror).py" 
}
function calc6() {
    location.href = "firstscript/calcbeta1.py"
}

function webcalc() {
    location.href="pyscript/index.html"
}

function bilde1() {
    location.href = "https://www.flickr.com/photos/devdsp/6999839463"
}

function bilde2() {
    location.href = "https://commons.wikimedia.org/wiki/File:World_topic_image_Satellite_image.jpg"
}

function bilde3() {
    location.href = "https://www.flickr.com/photos/vintage_illustration/45438980885"
}

function bilde4() {
    location.href = "https://commons.wikimedia.org/wiki/File:Webb%27s_New_View_of_the_Pillars_of_Creation_%282022%29_%28weic2216e%29.jpeg"
}

function bilde5() {
    location.href = "https://www.flickr.com/photos/gsfc/8804537584"
}

function ccpage() {
    location.href = "bildeoppgave/index.html"
}

//Creates the nessecary arrays      
const texttextarr = ["Bildeoppgave. Denne oppgaven er om CC lisenser.", "Kalkulator. Dette er mitt første script og jeg har jobbet lite på det i etterkant.", "Oppgave 5 er en introduksjon til media querry. ", "Kalkulator current state. Blir oppdatert etter som den blir jobbet med og utviklet. Jobber med GUI.", "AngyWaffle.no er en nettside som jeg bruker for å lære php og databaser.", "Webcalc er koden til kalkulatoren omgjort til å fungere i web. Work in progres."]
const buttontextarr = ["Gå til oppgave", "Last ned .py fil", "Gå til prosjekt","Last ned .py fil", "Gå til prosjekt", "Gå til prosjekt"]
const imgsrcarr = ["Images/2048px-Copyright.svg.png", "Images/firstScript.png", "Images/project_img.png", "Images/calc.png", "Images/angywaffle.png", "Images/python-logo-only.png"]
const functionsarr = [ccpage, calc6, oppg5, calc7, angywaffle, webcalc] 

let Aktive =[]
let Innleveringer = []
let Fritid = []
let Gamle = []
    