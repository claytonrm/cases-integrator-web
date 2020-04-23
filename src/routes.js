import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main'
import Case from './pages/case'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/v1/cases/:id" component={Case} />
        </Switch>
    </BrowserRouter>
);

export default Routes;