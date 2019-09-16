import React from 'react';
import './App.css';
import {fetchPeople}  from './services/PersonService';
import PersonList from './PersonList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      peopleData: []
    }

    fetchPeople()
    .then(data=> {
      this.setState({
        peopleData: data.results
      })
    })
  }

  render() {
    return (
      <div className="App">
        <PersonList 
          peopleDataProp = {this.state.peopleData}
        />
          {/* <Person /> */}
        {/* <Filters />
          <CityFilter />
          <GenderFilter /> */}
      </div>
    );
  }
}

export default App;
