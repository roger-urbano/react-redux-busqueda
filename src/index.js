import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import { BrowserRouter, Route, Redirect, Switch  } from 'react-router-dom';


import Result from './components/result'
import Details from './components/details'

const Root = (
        <BrowserRouter>
            <Switch>
                <Route path="/result"  component={Result} ></Route>
                <Route path="/details/:itemId"  component={Details }> </Route>
                <Redirect from="/" to="/result" />
            </Switch>
        </BrowserRouter>
);


ReactDOM.render(Root, document.getElementById('root'));
