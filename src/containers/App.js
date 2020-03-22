import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

// local files
import Login from './Login'
import Сontainer from './Container'

export default function App () {
  return <div className="container">
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route component={Сontainer}/>
      </Switch>
    </BrowserRouter>
  </div>
}
