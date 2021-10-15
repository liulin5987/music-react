import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {
  HeaderWrapper
} from './style'

export default memo(function MRAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <a className="icon sprite_01" href="#/">网易云音乐</a>
        <div className="navs">
        </div>
        <div className="right"></div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
