import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {


    render() { 
        const {onReset, counters, onDelete, onIncrement, onAdd} = this.props
        return (
        
            <div className="container">
                <h1 className="title">Pick Whatcha Want</h1>
        <div>
            <button onClick={onReset} className="btn btn-primary btn-small m-2">Reset</button>
         {counters.map(counter => 
         <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onAdd={onAdd} counter={counter}>
         </Counter>)}
        </div>
        </div>);
    }
}
 
export default Counters;