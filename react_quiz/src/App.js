import React, {Component} from 'react'
import Quiz from './containers/Quiz/Quiz'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../src/Home'
import {createStore} from 'redux'
import {connect} from "react-redux";


class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Счетчик: {this.props.counter}</h1>
                <button onClick={this.props.onAdd}>Добавить</button>
                <button onClick={this.props.onSub}>Вычесть</button>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/quiz" exact component={Quiz}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD'}),
        onSub: () => dispatch({type: 'SUB'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)