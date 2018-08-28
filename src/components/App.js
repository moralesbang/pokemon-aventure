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

  componentDidMount() {fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    .then((res)=>{ return res.json() }).then(async (res)=>{
      const pokemons = res.results;
      const updatePokemons = await Promise.all(
        pokemons.map(async (pokemon) => await (await fetch(pokemon.url)
        .then(response => { return response.json() }).then((response)=>{
          pokemon.experience = response.base_experience;
          pokemon.ability = response.abilities[0].ability.name;
          pokemon.type = response.types[0].type.name;          
          return pokemon
        })))
      )    
      this.setState({pokemons: updatePokemons})
    }).catch((e)=>{
      console.log(e)
    })
  }

  render() {
    const pokemons = this.state.pokemons.map((pokemon, index) => {
      return <Pokemon
        id={index + 1}
        key={pokemon.url}
        name={pokemon.name}
        ability={pokemon.ability}
        type={pokemon.type}
        experience={pokemon.experience}/>        
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
