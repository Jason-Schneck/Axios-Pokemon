import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

  //state vars
  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    // console.log("fetch")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    //"https://pokeapi.co/api/v2/pokemon/?limit=807"
      .then((serverResponse) => {
        console.log(serverResponse)
        return serverResponse.json()
      })
      .then((jsonResponse) => {
        console.log("FETCH CLICKED >>", jsonResponse)
        setPokemon(jsonResponse.results) // .results is where all the pokemon names are stored in the console
      })
      .catch((err)=> console.log("Got an error", err))
  }

  const axiosPokemon = () => {
    // console.log("clicking axios")
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        console.log("AXIOS CLICKED >>", response.data.results)
        setPokemon(response.data.results)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h3>Pokemon API</h3>
      <button onClick={fetchPokemon}>Fecth Pokemon</button>
      <button onClick={axiosPokemon}>Axios Pokemon</button>
      <hr/>
        {
          pokemon.map((element, index) => {
            // console.log("pokemon is an >>", pokemon)
            return (
              <div key={index}>
                  <h4>{element.name}</h4>
              </div>
            )
          })
        }
       
    </div>
  );
}

export default App;
