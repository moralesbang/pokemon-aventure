import React, { Component } from 'react'


class Pokemon extends Component {
  
  constructor(props) {
    super(props)
    this.state = { attributes: [] }
  }

  componentWillMount() {
    const requestPokemonAwait = async () => {
      const response = await fetch(this.props.url)
      const json = await response.json();
      this.setState({attributes: json})
    }
    requestPokemonAwait()
    console.log(this.setState)
  }

  render() {
    // const abilities = this.state.attributes.abilities.map(ability => {
    //   <li>{ability}</li>
    // })

    return(
      <div className="card pokemon">
        <div className="card-image">
          <figure className="image is-128x128 is-centered">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.attributes.id}.png`}
              alt={this.state.attributes.name + " image"} />
          </figure>
        </div>
        
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{this.state.attributes.name}</p>
          </div>
          <h4>Name: {this.state.attributes.name}</h4>
          
          <label className="label">Abilities:</label>
          <ol>
            {/* {abilities} */}
          </ol>
        </div>
            
        <footer className="card-footer">
          <button className="button is-primary">
            Capture
          </button>
        </footer>
      </div>
    )
  }
}

export default Pokemon