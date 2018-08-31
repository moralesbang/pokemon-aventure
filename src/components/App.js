import React, { Component } from 'react'
import './App.css'
import Pokemon from './Pokemon'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
      pokedex: []
    }
  }

  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
      .then(response => response.json())
      .then(pokemons => this.setState({pokemons: pokemons.results}))
  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10">
                <h4 className="title is-4">
                  Pokemons Captured: {this.state.pokedex.length}
                </h4>
                <h5 className="subtitle is-5">Selecciona el pokemon que quieres atrapar</h5>

                <div className="pokemon-list">
                  {this.state.pokemons.map((pokemon, index) => <Pokemon key={index} url={pokemon.url} />)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
