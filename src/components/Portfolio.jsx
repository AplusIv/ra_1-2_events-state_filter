import React, { Component } from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends Component {
  state = {
    filter: 'All',
  }

  constructor(props) {
    super(props);
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.selected = 'All';
    this.onClick = this.onClick.bind(this);
    this.onFilterData = this.onFilterData.bind(this);
  }

  onClick(event) {
    console.log(event);
    this.selected = event.target.textContent;
    this.setState(prevState => ({...prevState,
      filter: event.target.textContent,
    })) //  не меняем объект state по ссылке, а копируем его и в нём уже меняем состояние
    console.log(this.state);
  }

  onFilterData(filter) {
    const { data } = this.props;
    console.log(data);

    if (filter === 'All') {
      return data;
    }
    const filteredPortfolio = data.filter(item => item.category === filter);
    return filteredPortfolio;
  }

  render() {
    const filtredData = this.onFilterData(this.selected);
    console.log(filtredData);

    return (
      <>
        <Toolbar filters={this.filters} onClick={this.onClick} selected={this.state.filter}/>
        <ProjectList data={filtredData}/>
      </>
    )
  }
}
