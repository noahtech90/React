import React, { Component } from 'react';

// Stateless Functional Componet

const Navbar = () => {
    render() { 
        return ( <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>

        </nav> );
    }
}

class NavBar extends Component {

}
 
export default NavBar;