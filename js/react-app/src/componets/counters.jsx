import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {


    render() { 
        return (
        
            <div className="container">
                <h1 className="title">Pick Whatcha Want</h1>
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-small m-2">Reset</button>
         {this.props.counters.map(counter => 
         <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onAdd={this.props.onAdd} counter={counter}>
         </Counter>)}
        </div>
        </div>);
    }
}
 
export default Counters;