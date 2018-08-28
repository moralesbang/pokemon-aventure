import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

import Pokemon from './Pokemon';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myPokemons: [],
      pokemons: []      
    }
  }

  componentWillMount() {
    // Consume the pokemons
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
        const pokemons = response.data.results.slice(0, 10);
        const updatePokemons = pokemons.map(pokemon => {                   
          return {
            ...pokemon            
          }
        })
        this.setState({pokemons: updatePokemons});        ;
    });
  }

  render() {
    const pokemons = this.state.pokemons.map((pokemon, index) =>{
      return <Pokemon
        id={index + 1}
        key={pokemon.url}
        name={pokemon.name}/>        
    })
    return (
      <div className="App">
        <h4 style={{textAlign: 'center'}}>Selecciona el pokemon que quieres atrapar</h4>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <h5 className="title is-5">
                  Pokemons Captured: {this.state.myPokemons.length}
                </h5>
                {pokemons}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
