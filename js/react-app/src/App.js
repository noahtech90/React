import NavBar from './componets/navbar'
import Counters from './componets/counters'
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0}
    ]
  }

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
}

handleAdd = () => {
    const counters  = [...this.state.counters];
    let newObj = {}
    newObj['id'] =  counters[counters.length - 1].id + 1
    newObj['value'] = 0
    counters.push(newObj)
    this.setState({counters})
}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
}
  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onAdd={this.handleAdd}/>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
