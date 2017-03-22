import React from 'react';
import Layout from '../../layouts/Layout';
import ApiList from './ApiList';
import ApiDetails from './ApiDetails';

export default class ApiContainer extends React.Component {
    render() {
        return (
            <div className="apiContainer">
                <ApiList pokemonList={this.props.pokemonList} handleInput={this.props.handleInput} queryPokemon={this.props.queryPokemon}/>
                <ApiDetails currentPokemon={this.props.currentPokemon}/>
            </div>
        );
    }
}
