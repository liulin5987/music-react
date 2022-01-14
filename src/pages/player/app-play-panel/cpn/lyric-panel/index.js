import React, { memo, useRef, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { scrollTo } from '../../../../../utils/ui-helper'

import { PannelWrapper } from './style'

export default memo(function MRLyricPanel() {
  const {currentLyrics, currentLyricIndex} = useSelector((state) => ({
    currentLyrics: state.getIn(["player", "currentLyrics"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)
  // other hooks
  const panelRef = useRef()
  // 这里相当于vue中的watch/computed的用法
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex])
  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          currentLyrics.map((item, index) => {
            return (
              <div key={index}
                   className={classNames("lrc-item", {"active": index === currentLyricIndex})}>
                   {item.content}
              </div>
            )
          })
        }
      </div>
    </PannelWrapper>
  )
})
