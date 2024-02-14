function norathing(){
    const user = document.getElementById("nInput").value.toLowerCase();
    const fliped = cocks.split("").reverse().join("");
    if(user==fliped){
        document.getElementById("outputdos").innerHTML = "Er hva faen nå enn Nora kalte det"
    }else if(user!==fliped){
        document.getElementById("outputdos").innerHTML = "ikke hva faen nå enn Nora klate det"
    }
}

function omdettefunkerburdenorafaasekser(){
    const userinput = document.getElementById("userinput").value
    const verdifra = parseFloat(document.getElementById("verdifra").value)
    const verditil = parseFloat(document.getElementById("verditil").value)
    document.getElementById("output").innerHTML = (userinput * verdifra) / verditil
}