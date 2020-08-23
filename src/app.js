/**
 * @file app.js
 * @description app 入口
 */

import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {StoreContext, store} from './store';
import routeConfig from './route';

class App extends Component {
    render() {
        return (
            <StoreContext.Provider value={store}>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">index</Link>
                            </li>
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                        </ul>
                        <Switch>
                            {routeConfig.map(({key, path, component}) => (
                                <Route
                                    exact
                                    key={key}
                                    path={path}
                                    component={component}
                                />
                            ))}
                        </Switch>
                    </div>
                </Router>
            </StoreContext.Provider >
        )
    }
}

export default App;