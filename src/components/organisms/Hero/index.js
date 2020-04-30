// Hero Component
// --------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Hero extends Component {
// state = {};
// componentDidMount() {}
// yourFunction = () => {};

  render() {
    const { propsName } = this.props;

    return (
      <tag>
        Class Component (Stateful Component)
      </tag>
    );
  }
}

Hero.propTypes = {
  propsName: PropTypes.string
};

Hero.defaultProps = {
  propsName: ''
};

export default (Hero);
