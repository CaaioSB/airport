import React from 'react'
import PropTypes from 'prop-types'

const AppProviders = ({ children }) => <>{children}</>

AppProviders.propTypes = {
  children: PropTypes.node
}

export default AppProviders
