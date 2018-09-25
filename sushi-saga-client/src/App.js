import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state= {
      sushis: [],
      eatenSushi: [],
      index: 0,
      money: 15
    }
  }

  componentDidMount(){
      fetch(API)
      .then(res=>res.json())
      .then(sushis=>this.setState({sushis}))}

  handleClick= (event) =>{
    let price = event.target.dataset.price
    if(this.state.money >= price){
        let eaten = event.target.dataset.id
        this.setState({eatenSushi: [...this.state.eatenSushi, ...eaten]})
        this.setState({money: this.state.money-price})}
        else{ alert("You got not enuff mooooooneeeeeeee")}
  }

  checkIfEaten = (id, price) => {
    return !this.state.eatenSushi.includes(id.toString())
  }

  handleMoreButton = () => {
    if(this.state.index === 96){
      this.setState({index:0})
    } else {
    this.setState({index: this.state.index+4})}}

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} handleClick={this.handleClick} checkIfEaten={this.checkIfEaten} handleMoreButton={this.handleMoreButton} index={this.state.index} />
        <Table money={this.state.money} eatenSushis={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
