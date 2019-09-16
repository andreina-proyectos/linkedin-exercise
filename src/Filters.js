import React from 'react';

class Filters extends React.Component {
  constructor(props){
    super(props);
    this.handleCityInputChange=this.handleCityInputChange.bind(this);
    this.handleGenderInputChange=this.handleGenderInputChange.bind(this);
  }

  handleCityInputChange(event) {
    console.log(event.currentTarget.value)
    this.props.filterCityFunction(event.currentTarget.value);
  }


  handleGenderInputChange(event) {
    console.log(event.currentTarget.value)
  }

  render() {
    return(
    <div className="filters-container">

      <label htmlFor="" className="city-label">city</label>
      <input onChange={this.handleCityInputChange} id="city" type="text" className="input-filter__city"/>

      <label htmlFor="" className="city-label">gender</label>
      <input onChange={this.handleGenderInputChange} type="text" className="input-filter__gender"/>

    </div>
   )
  }
}
   
export default Filters;