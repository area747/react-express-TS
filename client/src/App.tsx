import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {LoginModule} from './loginModule/loginModule';

class App extends Component {
    renderLogin(string: string) {
        return <LoginModule value={string} />;
    }
    render() {
        return (
            <div>{this.renderLogin('Login')}</div>
            // <div className="App">
            //     <header className="App-header">
            //         <img src={logo} className="App-logo" alt="logo" />
            //         <p>
            //             Edit <code>src/App.tsx</code> and save to reload.
            //         </p>
            //         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            //             Learn React
            //         </a>
            //     </header>
            // </div>
        );
    }
}

export default App;
