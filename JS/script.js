/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


//redirect button to page for oppgave5
function redirect(url) {
location.href = url;
};

function angywaffle() {
    location.href = "https://angywaffle.no";
}

function download() {
    const url = "FirstScript/calcbeta6(werror).py";
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}