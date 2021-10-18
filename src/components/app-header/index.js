import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { headerLinks } from '@/common/local-data.js'
import { HeaderWrapper, HeaderRight } from './style'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd";

export default memo(function MRAppHeader() {
  const navLinks = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <a className='icon sprite_01' href='#/'>
          wyMusic
        </a>
        <div className='navs'>
          {headerLinks.map((item, index) => {
            return (
              <div className='nav' key={item.title}>
                {navLinks(item, index)}
              </div>
            )
          })}
        </div>
        <HeaderRight>
          <Input size="large" className="searchBox" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})
