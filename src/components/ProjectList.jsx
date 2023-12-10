import React, { Component } from 'react'

export default class ProjectList extends Component {
  render() {
    const { data } = this.props;
    console.log(data);

    const projectList = data.map(project => (
      <li className="project">
          <img src={project.img} alt={`${project.category} filter's pic`} />          
      </li>));

    return (
      <div className="project-list">
        <ul className='projects'>{projectList}</ul>
      </div>
    )
  }
}
