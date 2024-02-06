function norathing(){
    let cocksucker = document.getElementById("nInput").value.toLowerCase();
    let cocks = cocksucker.split("");
    const keepers = cocksucker.split("");
    let amountofloayones = 0;
    let amountofbitches = cocks.length-1;
    while(amountofloayones<amountofbitches){
        const penis = cocks[amountofloayones];
        const ass = cocks[amountofbitches];
        cocks[amountofloayones] = ass;
        cocks[amountofbitches] = penis;
        amountofbitches--;
        amountofloayones++;
    }
    console.log(cocks)
    console.log(keepers)
    cocks = JSON.stringify(cocks)
    keeper = JSON.stringify(keepers)
    if(cocks==keeper){
        document.getElementById("outputdos").innerHTML = "Er hva faen nå enn Nora kalte det"
    }else if(cocks!==keeper){
        document.getElementById("outputdos").innerHTML = "ikke hva faen nå enn Nora klate det"
    }
}

function maddeforstaarikkejs() {
    const Gallons = 3.78541;
    const Ounces = 0.0295735;
    const Cups = 0.236588;
    const Spiseskjeer = 0.0147868;
    const input = document.getElementById("mInput").value;
    const measure = document.getElementById("measure");
    if(measure.value == "Spiseskjeer"){
        document.getElementById("output").innerHTML = input/Spiseskjeer
    }else if(measure.value == "Ounces"){
        document.getElementById("output").innerHTML = input/Ounces
    }else if(measure.value == "Cups"){
        document.getElementById("output").innerHTML = input/Cups
    }else if(measure.value == "Gallons"){
        document.getElementById("output").innerHTML = input/Gallons
    }
}