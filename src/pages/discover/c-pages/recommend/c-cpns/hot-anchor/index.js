import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotAnchorsAction } from '../../store/actionCreaters'

import { MRAnchorWrapper } from './style'

export default memo(function MRHotAnchor() {
  // state hooks

  // redux hooks
  const dispatch = useDispatch()
  const { hotAnchors } = useSelector(
    (state) => ({
      hotAnchors: state.getIn(['recommend', 'hotAnchors'])
    }),
    shallowEqual
  )
  // other hooks
  useEffect(() => {
    dispatch(getHotAnchorsAction())
  }, [dispatch])
  return (
    <MRAnchorWrapper>
      <div className='title'>热门主播</div>
      {hotAnchors.map((item) => {
        return (
          <div className='anchor' key={item.id}>
            <img src={item.avatarUrl} alt='' className='avatar' />
            <div className='info'>
              <div className='name'>{item.nickName}</div>
              <div className='desc'></div>
            </div>
          </div>
        )
      })}
    </MRAnchorWrapper>
  )
})
