const pres =  [];
let presVar = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford B. Hayes", "James A. Garfield", "Chester A. Arthur", "Grover Cleveland", "Benjamin Harrison", "Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren G. Harding", "Calvin Coolidge", "Herbert Hoover", "Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan", "George H. W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama", "Donald Trump", "Joe Biden"];
let presimg = [];
let x=0;

function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

for(let i=0;i<pres.length;i++)
{
    document.getElementById("num").innerHTML = `The ${i+1} president of The United States`;
    random = getRandomInt(presVar.length);
    president = presVar[random].toLowerCase;
    document.getElementById("img").innerHTML = presimg[random];
    if(event.key === 'Enter') {
        let user = document.getElementById("userinput").innerText.toLowerCase;
    }
    if(user==presvar)
    {   
        x++
        document.getElementById("count").innerHTML = x+"/46"
    }
    presimg.splice(random, 1);
    presVar.splice(random, 1);
}