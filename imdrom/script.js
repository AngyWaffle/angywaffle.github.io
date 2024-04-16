apiUrl = "websites.json"

fetch(apiUrl)
    .then(response => response.text())
    .then(data => data.forEach(element => {
            domain = element.domain
            document.getElementById("test").innerHTML += domain;
        }))
    .catch(error => console.error(error))