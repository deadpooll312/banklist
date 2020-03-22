import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// local files
import HomeContainer from './Home'
import Create from './Create'
import Navbar from '../components/navbar'
import { ID_TOKEN } from '../constants'

function PrivateRoute ({ component: Component, ...props }) {
  const token = !!localStorage.getItem(ID_TOKEN)
  return <Route {...props} render={() => token ? <Component/> : <Redirect to="/login"/>}/>
}

export default function Container () {
  return <React.Fragment>
    <Navbar/>
    <PrivateRoute component={HomeContainer} path="/list"/>
    <PrivateRoute component={Create} path="/create"/>
    <Redirect to="/list"/>
  </React.Fragment>
}
