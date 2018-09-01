import React, { Component } from 'react'
import './App.css'
import pokemons from '../data/pokemons_data'
import Pokemon from './Pokemon'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokedex: []
    }
  }

  catchPokemon = pokemon => {
    const randy = Math.floor(Math.random() * 10) % 2
    if(randy === 0){
      this.setState({
        pokedex: this.state.pokedex.concat(pokemon)
      })
    } else {
      alert(`${pokemon.name} have escaped!`);
    }
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
                <h5 className="subtitle is-5">Gotta catch 'em all!</h5>

                <div className="pokemon-list">
                  {pokemons.map((pokemon, index) => <Pokemon key={index} onCatch={this.catchPokemon} attributes={pokemon} />)}
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
