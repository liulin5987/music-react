import React, { memo } from 'react'
import { MRLoginWrapper } from './style'

export default memo(function MRLogin() {
  return (
    <MRLoginWrapper className="sprite_02">
      <div className="txt">
      登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <div className="bottom">
        <div className="btn">用户登录</div>
      </div>
    </MRLoginWrapper>
  )
})
