import React from 'react';
import Person from './Person';

class PersonList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <ul className="person-list">
       { this.props.peopleDataProp.map((person)=>{
         return(
          <Person
            name={person.name.first}
            lastName={person.name.last}
            img={person.picture.thumbnail}
            city={person.location.city}
            age={person.dob.age}
          
          />
         )
        }
        )
      }
      </ul>
    )
  }
}

export default PersonList;