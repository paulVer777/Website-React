import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './Components/About'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Nav from './Components/Nav'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Nav/>

                        <Route exact path='/' render={() => <h1>Strona Główna</h1>}/>
                        <Route path='/about' component={About}/>
                        <Route path='/experience' component={Experience}/>
                        <Route path='/contact' component={Contact}/>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
