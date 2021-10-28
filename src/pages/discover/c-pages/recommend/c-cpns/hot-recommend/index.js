import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import MRRecHeader from '@/components/rec-header'
import MRSong from '@/components/mr-song'
import { getRecommendAction } from '../../store/actionCreaters'
import { SongsWrapper } from './style'

export default memo(function MRHotRecommend() {
  // state
  // redux hooks
  // 通过使用redux的hook来代替connect函数
  const dispatch = useDispatch()
  const { recommend } = useSelector(
    (state) => ({
      recommend: state.getIn(['recommend', 'recommends'])
    }),
    shallowEqual
  )
  // other hooks
  useEffect(() => {
    dispatch(getRecommendAction())
    return () => {}
  }, [dispatch])
  return (
    <div>
      <MRRecHeader
        title='热门推荐'
        sorts={['华语', '流行', '摇滚', '民谣', '电子']}
      ></MRRecHeader>
      <SongsWrapper>
        {recommend.map((item) => {
          return <MRSong key={item.id} info={item} />
        })}
      </SongsWrapper>
    </div>
  )
})
