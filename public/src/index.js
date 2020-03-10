import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Result from './components/result'
import Result from './components/details'

const Root = {
    <BrowserRouter>
        <Switch>
           <Route path="/result"  component={Result}/>
           <Route path="/details/:itemId"  component={Result}/>
           <Redirect from="/" to="/result" />
        </Switch>
    </BrowserRouter>
}


ReactDOM.render(Root, document.getElementById('root'));