import React from 'react';

class Person extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(  
      <li className="person-list__item">
        <h1 className="name">{this.props.name} {this.props.lastName}</h1>
        <img src={this.props.img} alt="" className="photo"/>
        <p className="city">{this.props.city}</p>
        <p className="age">{this.props.age}</p>
      </li>
   )
  }
}

export default Person;