import React, { memo } from 'react'

export default memo(function MRSingerEnter() {
  return (
    <div>
      <div className="title">
        <div className="name">入驻歌手</div>
        <div className="more">查看全部{'>'}</div>
      </div>
      <div className="artists">
        <div className="artist">
          <img src="" alt="" className="cover" />
          <div className="info">
            <div className="name"></div>
            <div className="desc"></div>
          </div>
        </div>
      </div>
      <div className="applay"></div>
    </div>
  )
})
