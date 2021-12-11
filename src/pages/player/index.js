import React, { memo } from 'react'

import { MRPlayerWrapper, PlayerLeft, PlayerRight } from './style'
export default memo(function index() {
  return (
    <MRPlayerWrapper>
      <div className="content wrap-v2">
      <PlayerLeft>
        
      </PlayerLeft>
      <PlayerRight></PlayerRight>
      </div>
    </MRPlayerWrapper>
  )
})
