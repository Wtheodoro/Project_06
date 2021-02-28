import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Budget from '../pages/Budget'
import Coins from '../pages/Coins'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/budget" exact component={Budget} />
            <Route path="/coins" exact component={Coins} />
            <Route path="/home" exact component={Home} />
        </Switch>
    )
}

export default Routes