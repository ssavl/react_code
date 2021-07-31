import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Pages
import Login from './pages/Login'
import PersonalAccount from './pages/PersonalAccount'

// Routes
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

import store from './store'

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Switch>
                <PublicRoute exact path={['/', '/login']} component={Login} />
                <PrivateRoute exact path={'/personal'} component={PersonalAccount} />
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
