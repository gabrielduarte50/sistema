import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
const Routes: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        </>
    );
};
export default Routes;
