import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import { renderRoutes } from 'react-router-config'


const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
)

App.propTypes = {
  route: PropTypes.any, // eslint-disable-line
}

export default App
