import React from 'react';
import style from './PokemonList.scss';

export default class PokemonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pokemonList = this.props.pokemonList;

        pokemonList = pokemonList.map((item) => {
            return <li className="item" key={item.name}>{item.name}</li>;
        });

        return (
            <ul className="pokemonList">
                 {pokemonList}
            </ul>
        );
    }
}
