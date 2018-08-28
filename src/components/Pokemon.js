import React from 'react';

const pokemon = (props) => (
    <div className="card">
        <div className="card-image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
        </div>
    
        <div className="card-content">
            <h4>Name: {props.name}</h4>
            <p>Experience: {props.experience}</p>
            <p>Type: {props.type}</p>
            <p>Ability: {props.ability}</p>
        </div>

        <footer className="card-footer">
            <button className="button is-primary">
            Capture
            </button>
        </footer>
    </div>

)

export default pokemon;