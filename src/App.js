import React, { memo } from 'react'

import routes from '@/router'

import {renderRoutes} from 'react-router-config'
import {HashRouter} from 'react-router-dom'

import MRAppHeader from '@/components/app-header'
import MRAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <div>
      <HashRouter>
      <MRAppHeader />
      {renderRoutes(routes)}
      <MRAppFooter />
      </HashRouter>
    </div>
  )
})
