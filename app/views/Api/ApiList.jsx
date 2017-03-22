import React from 'react';
import Layout from '../../layouts/Layout';
import PokemonList from '../../components/PokemonList/PokemonList';

export default class ApiContainer extends React.Component {
    render() {
        return (
            <div className="list">
                <form onSubmit={(event)=>{event.preventDefault()}}>
                    <input type="text" onChange={this.props.handleInput}/>
                    <button type="submit" onClick={this.props.queryPokemon}></button>
                </form>
                <PokemonList pokemonList={this.props.pokemonList}/>
            </div>
        );
    }
}
