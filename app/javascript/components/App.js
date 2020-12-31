import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Gallery} />
    </Switch>
  )
}

export default App