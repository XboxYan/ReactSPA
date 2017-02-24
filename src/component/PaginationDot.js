import React, { Component } from 'react';

const styles = {
  root: {
    height: 18,
    width: 18,
    border: 0,
    background: 'none',
    padding: 0,
    outline:'none'
  },
  dot: {
    backgroundColor: '#e4e6e7',
    height: 6,
    width: 6,
    borderRadius: 6,
    margin:'0 2px',
    outline:'none',
    transition:'.3s'
  },
  active: {
    backgroundColor: 'orangered',
  },
};

export default class PaginationDot extends Component {

  handleClick = (event) => {
    
  };

  render() {
    const {
      active,
    } = this.props;

    let styleDot;

    if (active) {
      styleDot = Object.assign({}, styles.dot, styles.active);
    } else {
      styleDot = styles.dot;
    }

    return (
      <div style={styleDot} />
    );
  }
}