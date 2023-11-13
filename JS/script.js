
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
    