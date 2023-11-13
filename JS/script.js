
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//redirect button to local page
function redirect(url) {
    location.href = url;
    };
    
function oppg5() {
    location.href = "oppgave_5/oppgave_5.html"
}

//external links need seperate functions
function angywaffle() {
    location.href = "https://angywaffle.no";
}

//download function
function calc7() {
    url = "Calculator/calcbeta7(werror).py"
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
function calc6() {
    url = "FirstScript/calcbeta6(werror).py"
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

//Creates the nessecary arrays      
const texttextarr = ["Kalkulator som tar matte formler. Dette er mitt første script og jeg har jobbet lite på det i etterkant.", "Oppgave 5 er en introduksjon til media querry. ", "Kalkulator current state. Blir oppdatert etter som den blir jobbet med og utviklet. Jobber med GUI.", "AngyWaffle.no er en nettside som jeg bruker for å lære php og databaser."]
const buttontextarr = ["Last ned .py fil", "Gå til prosjekt","Last ned .py fil", "Gå til prosjekt"]
const imgsrcarr = ["Images/firstScript.png", "Images/project_img.png", "Images/calc.png", "Images/angywaffle.png"]
const functionsarr = [calc6, oppg5, calc7, angywaffle] 

let Aktive =[]
let Innleveringer = []
let Fritid = []
let Gamle = []

    