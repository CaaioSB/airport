import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'

import Loader from 'components/Loader'

import Theme from 'theme'

import 'sanitize.css/sanitize.css'

const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'))

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

button, a {
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
}
`

const App = () => {
  return (
    <Theme>
      <Helmet titleTemplate='Nave.rs | %s' />
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Router>
          <UnauthenticatedApp />
        </Router>
      </Suspense>
    </Theme>
  )
}

export default App
