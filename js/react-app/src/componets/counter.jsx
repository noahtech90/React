import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        today: new Date().toLocaleDateString(),
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"]
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

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

       return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>; 
    }

    handleIncrement = () => {
        this.setState(count++)
    }

    render() { 

        return (
        <div>
            { this.state.tags.length === 0 && 'Please create a new tag'}
            <span style={ this.dateStyles }>{this.formatDate()}</span>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <img style={this.imgStyles} src={this.state.imageUrl} alt="" />
            { this.renderTags() }

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