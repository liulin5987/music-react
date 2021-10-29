import React, { memo } from 'react'

import { AlbumWrapper } from './style'

export default memo(function MRAlbum(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-top">
        <img src={info.picUrl} alt="" className="album-cover" />
        <div className="album-cloak image_cover"></div>
      </div>
      <div className="album-bottom">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
