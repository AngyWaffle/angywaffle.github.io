
document.getElementById("c6").addEventListener("click", calc6);
document.getElementById("o5").addEventListener("click", oppg5);
document.getElementById("c7").addEventListener("click", calc7);
document.getElementById("aw").addEventListener("click", angywaffle);

//redirect button to local page
function redirect(url) {
    location.href = url;
    };
    
    function oppg5() {
        location.href = "../oppgave_5/oppgave_5.html"
    }
    
    //external links need seperate functions
    function angywaffle() {
        location.href = "https://angywaffle.no";
    }
    
    //download function
    function calc7() {
        url = "../Calculator/calcbeta7(werror).py"
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    function calc6() {
        url = "../FirstScript/calcbeta6(werror).py"
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    