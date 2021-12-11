import React, { memo } from 'react'
import { Control, PlayerBarWrapper, PlayInfo } from './style'

export default memo(function MRPlaybar() {
  return (
    <PlayerBarWrapper className='sprite_player'>
      <div className='content wrap_v2'>
        <Control>
          <button className='sprite_player btn prev'></button>
          <button className='sprite_player btn play'></button>
          <button className='sprite_player btn next'></button>
        </Control>
        <PlayInfo>
          
        </PlayInfo>
      </div>
    </PlayerBarWrapper>
  )
})
