import React, { memo } from 'react'
import { getSizeImage } from '../../utils/format-utils'

import { RankingWrapper } from './style'

export default memo(function MRTopRanking(props) {
  // state and props
  const { info } = props
  const { tracks = [] } = info
  // redux hooks

  // other hooks
  // ohter handle
  
  return (
    <RankingWrapper>
      <div className='top'>
        <img
          src={getSizeImage(info.coverImgUrl, 80)}
          alt=''
          className='cover'
        />
        <div className='info'>
          <div className='title'>{info.name}</div>
          <div className='icons'></div>
        </div>
      </div>
      <div className='list'>
        {tracks?.slice(0, 10).map((item, index) => (
          <div className='item' key={item.id}>
            <div className='index'>{index + 1}</div>
            <a href='todo' className='name'>
              {item.name}
            </a>
            <div className='operate'>
              <button className='btn sprite_02 play'></button>
              <button className='btn sprite_icon2 addto'></button>
              <button className='btn sprite_02 favor'></button>
            </div>
          </div>
        ))}
      </div>
      <div className='more'>
        <a href='todo'>查看全部{'>'}</a>
      </div>
    </RankingWrapper>
  )
})
