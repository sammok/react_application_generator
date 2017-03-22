import React from 'react';
import Layout from '../../layouts/Layout';
import ApiContainer from './ApiContainer';
import { getPokemonList, getPokemonInfo } from '../../resources/api';

export default class Api extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            pokemonNameToQuery: '',
            currentPokemon: null,
            query: {
                name: ''
            },
            next: null
        };

        this.handleInput = this.handleInput.bind(this);
        this.queryPokemon = this.queryPokemon.bind(this);
        this.setCurrentPokemon = this.setCurrentPokemon.bind(this);
    }

    handleInput(event) {
        let value = event.target.value;
        if (value) {
            this.setState({ pokemonNameToQuery: value });
        }
    }

    componentDidMount() {
        getPokemonList()
            .then((res) => {
                let data = res.data;
                this.setState({
                    data: data.results,
                    next: data.next
                })
            });
    }

    queryPokemon() {
        let pokemonName = this.state.pokemonNameToQuery.trim();

        if (pokemonName === '') return;

        getPokemonInfo(pokemonName)
            .then((res) => {
                this.setState({
                    currentPokemon: res.data
                });
            });
    }

    setCurrentPokemon(currentPokemon) {
        this.setState({
            currentPokemon
        });
    }

    render() {
        return (
            <Layout>
                <h1>Api</h1>
                <ApiContainer pokemonQuery={this.state.query} pokemonList={this.state.data} currentPokemon={this.state.currentPokemon} handleInput={this.handleInput} queryPokemon={this.queryPokemon}/>
            </Layout>
        );
    }
}
