import React from 'react';
import './App.css';
import Data from '../Data/Data'

class App extends React.Component {

  state = {
    data: Data || [],
    showItems: false,
    selectedItem: this.data && this.data[0].city,
    searchResults: null
  }

ShowItemsHandler = () => {

  
  this.setState({
    showItems: !this.state.showItems
  
  })
}

selectItem = (country) => {

  this.setState({
    selectedItem: country.city
  })
}

searchHandler = (event) => {

  
  var searchResults = [];
  for(var obj of this.state.data) {
    if(obj.city.toUpperCase().indexOf(event.target.value.toUpperCase()) !== -1 ){
      searchResults.push(obj)
    }
  }

  this.setState({
    searchResults: searchResults,
  })

  }
  

  

  render() {

    console.log(this.state.searchResults);
    var i = 0;
    return (
      <div className="App">
        <h1>this is SPARTA!!!!!!!!!!!!</h1>
        
        <div className='container'>

          <div className='selectedItem'>
            {this.state.selectedItem}
          </div>

          <div className='input'>
            <input 
            type="text"
            onChange={this.searchHandler}></input>
          </div> 
          <div className="arrow" onClick={this.ShowItemsHandler}>
            <span className={this.state.showItems ? 'arrowUp' : 'arrowDown'}/>
          </div>
          {
            this.state.searchResults ? 
            <div 
            style={{display: this.state.showItems ? 'block' : 'none'} }
            className = 'CitiesDiv'>
            {
            
              this.state.searchResults.map( (country) => {
                i++;
                return (<div 
                          onClick={this.selectItem.bind(this,country)}
                          className={this.state.selectedItem === country.city ? 'selected' : ''}
                          key={i}>
                          {country.city}
                      </div>)
              } )
  
  
                      
            }
            </div>
            : 
            <div 
            style={{display: this.state.showItems ? 'block' : 'none'} }
            className = 'CitiesDiv'>
            {
            
              this.state.data.map( (country) => {
                i++;
                return (<div 
                          onClick={this.selectItem.bind(this,country)}
                          className={this.state.selectedItem === country.city ? 'selected' : ''}
                          key={i}>
                          {country.city}
                      </div>)
              } )
  
  
                      
            }
            </div>
          }

          </div>
        
        
      </div>
    );
  }

  
}

export default App;
