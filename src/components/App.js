import React, { Component } from 'react';
import './App.css'

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

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <h5 class="title is-5">
                  Pokemons Captured: {this.state.myPokemons.length}
                </h5>

                {/* Put pokemons here */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
