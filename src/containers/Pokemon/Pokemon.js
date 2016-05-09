import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {load} from 'redux/modules/pokemon';

@connect(state => ({
  pokemon: state.pokemon
}), (dispatch) => {
  return {
    ...bindActionCreators({load}, dispatch),
    dispatch
  };
})

export default class Pokemon extends Component {
  static propTypes = {
    pokemon: PropTypes.object,
    load: PropTypes.func,
    dispatch: PropTypes.func
  };

  clicked() {
    this.props.load(2, this.props.dispatch);
  }

  render() {
    const {pokemon} = this.props;
    const styles = require('./Home.scss');

    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div onClick={this.clicked.bind(this)}>Click me</div>
      </div>
    );
  }
}
