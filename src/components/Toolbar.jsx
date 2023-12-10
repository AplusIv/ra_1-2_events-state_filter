import React, { Component } from 'react';
import './toolbar.css';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    const { filters } = this.props;
    const { onClick } = this.props;
    const { selected } = this.props;

    const allFilterList = filters.map(filter => {
      if (selected === filter) {
        return <li className='filter selected' onClick={onClick}>{filter}</li>
      }
      return <li className='filter' onClick={onClick}>{filter}</li>
    });
  
    return (
      <ul className="filters">{allFilterList}</ul>
    )
  }
}
