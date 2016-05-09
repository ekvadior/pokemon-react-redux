import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class PokemonList extends Component {
  static propTypes = {
    pokemons: PropTypes.array,
  }

  render() {
    const {pokemons} = this.props;
    // const styles = require('./PokemonList.scss');

    return (
      <ul>
        {pokemons.map((pokemon, index) => {
          return (
            <li key={index}>
              <Link to={'pokemon/' + (index + 1)}>{pokemon.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
