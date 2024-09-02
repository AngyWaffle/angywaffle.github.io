const apiUrl = '../JSON/main-page-links.json'

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(myObj => {
    let jsonpages = myObj.pages
    console.log(jsonpages)
  })
  .catch(error => {
    console.error('Error:', error);
  });