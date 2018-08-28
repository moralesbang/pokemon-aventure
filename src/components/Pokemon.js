import React from 'react';

const pokemon = (props) => (
    <div className="card">
        <div className="card-image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
        </div>
    
        <div className="card-content">
            <h4>Nombre: {props.name}</h4>
            <p>{props.experience}</p>
        </div>

        <footer className="card-footer">
            <button className="button is-primary">
            Capture
            </button>
        </footer>
    </div>

)

export default pokemon;