import React, { memo } from 'react'

import { PanelWrapper } from './style'
import MRPlayHeader from './cpn/play-header'
import MRPlayList from './cpn/play-list'
import MRLyricPanel from './cpn/lyric-panel'

export default memo(function MRPlayPanel() {
  return (
    <PanelWrapper>
      <MRPlayHeader />
      <div className="main">
        <MRPlayList />
        <MRLyricPanel />
      </div>
    </PanelWrapper>
  )
})
