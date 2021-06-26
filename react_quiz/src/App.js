import React, {Component} from 'react'
import Quiz from './containers/Quiz/Quiz'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../src/Home'

export default class App extends Component { 

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/quiz" exact component={Quiz} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

