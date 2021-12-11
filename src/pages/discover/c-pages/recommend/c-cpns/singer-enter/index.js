import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSettleSingersAction } from '../../store/actionCreaters'
import { MRSingerEnterWrapper } from './style'

export default memo(function MRSingerEnter() {
  // state
  // redux hooks
  const dispatch = useDispatch()
  const { settleSingers } = useSelector(
    (state) => ({
      settleSingers: state.getIn(['recommend', 'settleSingers'])
    }),
    shallowEqual
  )
  // other hooks
  useEffect(() => {
    dispatch(getSettleSingersAction())
  }, [dispatch])
  return (
    <MRSingerEnterWrapper>
      <div className='title'>
        <div className='name'>入驻歌手</div>
        <div className='more'>查看全部{'>'}</div>
      </div>
      {settleSingers.map((item) => {
        return (
          <div className='artists' key={item.id}>
            <div className='artist'>
              <img src={item.picUrl} alt='' className='cover' />
              <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='desc'>{item.alias[0]}</div>
              </div>
            </div>
          </div>
        )
      })}

      <div className='apply'>申请成为网易音乐人</div>
    </MRSingerEnterWrapper>
  )
})
