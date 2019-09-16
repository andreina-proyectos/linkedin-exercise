import React from 'react';

class PersonList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <ul className="person-list">
       { this.props.peopleDataProp.map((person)=>{
         return(
          <li className="person-list__item">
            <h1 className="name">{person.name.first} {person.name.last}</h1>
            <img src={person.picture.thumbnail} alt="" className="photo"/>
            <p className="city">{person.location.city}</p>
            <p className="age">{person.dob.age}</p>
          </li>
         )
        }
        )
      }
      </ul>
    )
  }
}

export default PersonList;