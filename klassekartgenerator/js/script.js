function klassekart()
{
    const students = document.getElementById("userInput").value;
    let studentsArray = students.split(",");
    const x = studentsArray.length;
    let studentsFinal = [];
    const a = document.getElementById("seatNum").value;
    let b = 0;
    let f = document.getElementById("rowNum").value;
    let c = 0;
    console.log(a)
    studentsFinal += "<table><tr>"
    for(i=0; x > i; i++)
    {
        if(Math.ceil(x/f) == c){
            studentsFinal+="</tr><tr>"
            c=0;
            b=0;
        }
        if(a == b)
        {
            studentsFinal += "<td></td>";
            b=0;
        }
        const random = Math.floor(Math.random() * studentsArray.length);
        student = studentsArray[random];
        if(student.split[0] == " " && i>0)
        {
            studentSplit = student.split("");
            studentSplit.splice(0, 1);
            student = studentSplit.toString();
            studentsFinal += `<td>${student}</td>`;
        } 
        else
        {
            studentsFinal += `<td>${student}</td>`;
            
        }
        b++;
        c++;
        studentsArray.splice(random, 1);
    }
    studentsFinal += "</tr></table>"
    document.getElementById("output").innerHTML = studentsFinal;
}

/* Navn1, Navn2, Navn3, Navn4, Navn5 */
/* Navn 1, Navn 2, Navn 3, Navn 4, Navn 5, Navn 6, Navn 7, Navn 8, Navn 9, Navn 10, Navn 11, Navn 12, Navn 13, Navn 14, Navn 15 */