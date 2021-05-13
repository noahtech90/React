import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        today: new Date().toLocaleDateString(),
        imageUrl: "https://picsum.photos/200"
     };

     dateStyles = {
        margin: 4,
        fontWeight: 'bold',
        display: 'block'
     };

     imgStyles = {
         display: 'block',
         marginTop: 200,
         marginLeft: '40%'

     }

    render() { 

        return (
        <div>
            <span style={ this.dateStyles }>{this.formatDate()}</span>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <img style={this.imgStyles} src={this.state.imageUrl} alt="" />
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? "Zero" : count
    }

    formatDate() {
        const { today } = this.state
        return today
    }
}
 
export default Counter;