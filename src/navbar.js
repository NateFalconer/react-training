import React, { Component } from 'react';
import coolButton from './coolbutton';

class navbar extends Component {
    render() {
        return (
           
                <nav class="navbar is-transparent">
                    <img className ="bulmalogo" src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                    <hr class="navbar-divider"></hr>
                    <a class="homelink" href="https://bulma.io">Home</a>
                    <div class="navbar-end">
                    <button name="loginbutton" class="button is-rounded my-class is-danger is-small">Login</button>
                    <button className="signupbutton" class="button is-small is-success">Signup</button>
                    </div>
                </nav>
            
        );
    }
}

export default navbar;