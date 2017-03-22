import axios from 'axios';

function getPokemonList() {
    return axios.get('http://pokeapi.co/api/v2/pokemon/');
}

function getPokemonInfo(name) {
    return axios.get('http://pokeapi.co/api/v2/pokemon/'+name);
}

export { getPokemonList, getPokemonInfo }
