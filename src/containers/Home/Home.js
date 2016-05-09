import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {PokemonList} from '../../components';
import {bindActionCreators} from 'redux';
import * as siteActions from 'redux/modules/site';

@connect(state => ({
  site: state.site
}),
  (dispatch) => {
    return {
      ...bindActionCreators({...siteActions}, dispatch),
      dispatch
    };
  }
)


export default class Home extends Component {
  static propTypes = {
    site: PropTypes.object,
    load: PropTypes.func,
    dispatch: PropTypes.func
  };

  render() {
    const {site, dispatch, load} = this.props;

    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className="btn btn-primary" onClick={load.bind(this, dispatch)}>
          Let's get some pokemons
        </div>
        {!site.isLoading && site.loaded ? <PokemonList pokemons={site.data.results} /> : ''}
      </div>
    );
  }
}
