import logo from './logo.svg';
import './App.css';

/* const routeChange = (link) =>{ 
    let path = link; 
    navigate(path);
}  */

const apiUrl = 'JSON/main-page-links.json'

function App() {
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(myObj => {
      myObj.pages.forEach(element => {
          return(<div>
          <img src={element.imgsrc} alt="Bilde av prosjektet sin forside"/>
          <p>{element.texttext}</p>
          <button>{element.buttontext}</button>
          </div>)
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export default App;
