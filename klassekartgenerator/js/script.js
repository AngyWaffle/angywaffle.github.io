function klassekart()
{   
    let aktivKlasse = sessionStorage.getItem("aktiv");
    let studentsFinal = ["<table><tr>"];
    let jsonObj = JSON.parse(localStorage.getItem(aktivKlasse))
    console.log(jsonObj)
    if(jsonObj!==null&&jsonObj!==undefined){
        var old = jsonObj.Old
        var oldBal = jsonObj.oldBal
        var studentsArray = jsonObj.students
        var grunnlag = jsonObj.grunnlag
    }else{
        const students = document.getElementById("userInput").value;
        var studentsArray = students.split(",");
    }
    const x = studentsArray.length;
    const seatnum= document.getElementById("seatNum").value;
    const rownnum= document.getElementById("rowNum").value;
    let balance = [];
    let current = [];
    let studArr = [];
    let b = 0;
    let c = 0;
    let y = 0;
    let alone = document.querySelector('.alone').checked;
    console.log(alone)
    for(i=0; x > i; i++)
    {
        
        if(Math.ceil(x/rownnum) == c){
            studentsFinal.push("</tr><tr>")
            c=0;
            b=0;
        }
        if(seatnum== b)
        {   
            if(alone==true){
                studentsFinal.push("<td></td>");
            }else if(alone==false&&Math.ceil(x/rownnum) !=c+1&& x!=y+1){
                studentsFinal.push("<td></td>");
            }
            b=0;
        }
        if(grunnlag.length!==0){
            var random = Math.floor(Math.random() * grunnlag.length);
            var student = grunnlag[random];
        }else{
            var random = Math.floor(Math.random() * studentsArray.length);
            var student = studentsArray[random];
        }
        current.push(student);
        if(i>0)
        {
            bal1=current[i];
            bal2=current[i-1];
            balstr=bal1+bal2;
            if(oldBal!==undefined&&oldBal!==null&&oldBal!==""){
                console.log(oldBal)
                while(balstr in oldBal)
                {
                    if(grunnlag.length!==0){
                        var random = Math.floor(Math.random() * grunnlag.length);
                        var student = grunnlag[random];
                    }else{
                        var random = Math.floor(Math.random() * studentsArray.length);
                        var student = studentsArray[random];
                    }
                    bal1=current[i];
                    bal2=current[i-1];
                    balstr=bal1+bal2;
                }
            }
            balance.push(balstr);
            studArr.push(student)
        }
        if(Math.floor(x/rownnum)-1 == c)
        {
            studentsFinal.push(`<td>${student}</td>`);
        }else 
        {
            studentsFinal.push(`<td>${student}</td>`);
        }
        b++;
        c++;
        y++;
        if(grunnlag.length!==0){
            grunnlag.splice(random, 1);
            let num= studentsArray.indexOf(student);
            studentsArray.splice(num, 1);
        }else{
            studentsArray.splice(random, 1);
        }
    }
    jsonObj.oldBal = balance;
    console.log(jsonObj)
/*     if(aktivKlasse!==null&&aktivKlasse!==undefined&&aktivKlasse!==""){
        localStorage.setItem(aktivKlasse, JSON.stringify(jsonObj));
    } */
    studentsFinal.push("</tr></table>")
    document.getElementById("output").innerHTML = studentsFinal.join("");
    console.log(studentsFinal.join(""))
}

function createClass(){
    studentsArrConst = document.getElementById("klasseInput").value.split(",")
    grunnlag = document.getElementById("grunnlag").value.split(",")
    const myobj = {
        students:studentsArrConst,
        old:"",
        oldBal:"",
        grunnlag:grunnlag
    }
    console.log(myobj)
    localStorage.setItem(document.getElementById("klasseNavn").value, JSON.stringify(myobj));
}

function loadClass(){
    aktivKlasse = document.getElementById("klasse").value
    let jsonObj = JSON.parse(localStorage.getItem(aktivKlasse))
    document.getElementById("userInput").innerHTML = jsonObj.students
    window.sessionStorage.setItem("aktiv", aktivKlasse)
}

/* Navn1, Navn2, Navn3, Navn4, Navn5 */
/* Navn 1, Navn 2, Navn 3, Navn 4, Navn 5, Navn 6, Navn 7, Navn 8, Navn 9, Navn 10, Navn 11, Navn 12, Navn 13, Navn 14, Navn 15 */