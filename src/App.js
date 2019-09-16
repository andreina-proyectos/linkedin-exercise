import React from 'react';
import './App.css';
import {fetchPeople}  from './services/PersonService';
import PersonList from './PersonList';
import Filters from './Filters'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      peopleData: [],
      inputCityValue: '',
    }

    this.filterDataByCity=this.filterDataByCity.bind(this);
    this.filterDataByGender=this.filterDataByGender.bind(this);

    fetchPeople()
    .then(data=> {
      this.setState({
        peopleData: data.results
      })
    })
  }

  filterDataByCity(city) {
    this.setState({
      inputCityValue:city
    })
  }

  filterDataByGender(Gender) {
    
  }

  render() {
    return (
      <div className="App">
        <Filters 
        filterCityFunction={this.filterDataByCity}
        />
        <PersonList 
          peopleDataProp = {this.state.peopleData.filter(
            (person) => {
              //si cityFilter esta vacio, me devuelve todos los rsult sin filtrar. filter espera o true o false. enseña o no enseña
                if(this.state.inputCityValue === '') {
                  return true
                }
                else {
                  return person.location.city.includes(this.state.inputCityValue) 
                }
              
            }
          )}
        />
        
          {/* <CityFilter />
          <GenderFilter /> */}
      </div>
    );
  }
}

export default App;
