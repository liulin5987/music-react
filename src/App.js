import React, { memo } from 'react'
import { Provider } from 'react-redux'

import routes from '@/router'
import store from './store'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import MRAppHeader from '@/components/app-header'
import MRAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MRAppHeader />
        {renderRoutes(routes)}
        <MRAppFooter />
      </HashRouter>
    </Provider>
  )
})
