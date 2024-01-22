const apiUrl = 'json/yas.json';
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(myObj => {
    // Process the retrieved user data
    console.log(myObj);
    console.log(myObj.categories);
    const cats = myObj.categories;
    catsArr = cats.split(",");
    console.log(catsArr);
    categoryFinal = [];
    t1 = [];
    t2 = [];
    t3 = [];
    t4 = [];
    for(let i=0;i<16;i++)
    {
        random = getRandomInt(16-i);
        category = catsArr[random];
        if(category.split[0] == " " && i>0)
        {
            categorySplit = category.split("");
            categorySplit.splice(0, 1);
            category = categorySplit.toString();
            categoryFinal.push(category);
        } 
        else
        {
            categoryFinal.push(category);
        }
        catsArr.splice(random, 1);
    }
    console.log(categoryFinal);
    for(let x=0;x<16;x++)
    {
        if(x<4)
        {
            t1.push(categoryFinal[x])
        }else if(x<8)
        {
            t2.push(categoryFinal[x])
        }else if(x<12)
        {
            t3.push(categoryFinal[x])
        }else if(x<16)
        {
            t4.push(categoryFinal[x])
        }
    } 
    console.log(t1)
    console.log(t2)
    console.log(t3)
    console.log(t4)

  })
  .catch(error => {
    console.error('Error:', error);
  });