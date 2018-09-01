import React, { Component } from 'react'

class Pokemon extends Component {

  render() {

    const abilities = this.props.attributes.abilities.map((element, index) => 
      <li key={index}>{element.ability.name}</li>
    )

    const moves = this.props.attributes.moves.map((element, index) =>
      <li key={index}>{element.move.name}</li>
    )

    return(
      <div className="card pokemon">
        <div className="card-image">
          <figure className="image is-128x128 is-centered">
            <img
              src={this.props.attributes.imgUrl}
              alt="pokemon" />
          </figure>
        </div>
        
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{this.props.attributes.name}</p>
          </div>
          
          <table className="table is-narrow is-fullwidth">
            <tbody>
              <tr>
                <td className="has-text-bold">Weight</td>
                <td>{this.props.attributes.weight}</td>
              </tr>

              <tr>
                <td className="has-text-bold">Height</td>
                <td>{this.props.attributes.height}</td>
              </tr>

              <tr>
                <td className="has-text-bold">Abilities</td>
                <td>{ abilities }</td>
              </tr>

              <tr>
                <td className="has-text-bold">Moves</td>
                <td>{ moves }</td>
              </tr>

            </tbody>
          </table>
          
        </div>
            
        <footer className="card-footer">
          <button className="button is-primary" onClick={() => this.props.onCatch(this.props.attributes)}>
            Capture
          </button>
        </footer>
      </div>
    )
  }
}

export default Pokemon