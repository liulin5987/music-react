import React, { memo, useEffect } from 'react'

import MRRecHeader from '@/components/rec-header'
import MRTopRanking from '@/components/top-ranking'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreaters'
import { RankingWrapper } from './style'

export default memo(function MRRankList() {
  // state
  // redux hooks
  const dispatch = useDispatch()
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }), shallowEqual)
  console.log('榜单信息', upRanking, newRanking, originRanking)
  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(1))
    dispatch(getTopListAction(2))
  }, [dispatch])
  return (
    <RankingWrapper>
      <MRRecHeader title="榜单" />
      <div className="tops">
        <MRTopRanking info={newRanking} />
        <MRTopRanking info={upRanking} />
        <MRTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
