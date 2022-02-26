import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Panel from 'routes/Panel'

const UnauthenticatedApp = () => (
  <Switch>
    <Route path='/' component={Panel} />
    <Redirect to='/' />
  </Switch>
)

export default UnauthenticatedApp
