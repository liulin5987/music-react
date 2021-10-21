import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'
import { discoverMenu } from '../../common/local-data'

import { DiscoverWrapper, DiscoverHeader } from './style'
import { NavLink } from 'react-router-dom'

export default memo(function Discover(props) {
  const { route } = props

  return (
    <DiscoverWrapper>
      <DiscoverHeader>
        <div className='wrap-v1'>
          <div className='navs'>
            {discoverMenu.map((item) => {
              return (
                <NavLink className='n-item' to={item.link} key={item.title}>
                  <div className="title">{item.title}</div>
                </NavLink>
              )
            })}
          </div>
        </div>
      </DiscoverHeader>
      {renderRoutes(route.routers)}
    </DiscoverWrapper>
  )
})
