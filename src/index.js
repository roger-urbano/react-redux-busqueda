import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Facilita la integración de Redux com componentes de React
import { BrowserRouter, Route, Redirect, Switch  } from 'react-router-dom';

import Result from './components/result'
import Details from './components/details'
import store from './redux/store';  // store (reducer principal) que contien todos los reducers 


const Root = (
    <Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route path="/result"  component={Result} ></Route>
                <Route path="/details/:itemId"  component={Details }> </Route>
                <Redirect from="/" to="/result" />
            </Switch>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(Root, document.getElementById('root'));
