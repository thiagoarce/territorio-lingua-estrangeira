import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tarjeta from './pages/Tarjeta'

const Routes = () => {

    return(
    <BrowserRouter>
        <Switch>
            <Route path="/tarjeta" exact component={Tarjeta}/>
        </Switch>
    </BrowserRouter>);
}

export default Routes;