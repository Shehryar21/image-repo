import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'
import AddImage from './AddImage'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route exact path="/add_image" component = {AddImage} />
    </Switch>
  )
}

export default App