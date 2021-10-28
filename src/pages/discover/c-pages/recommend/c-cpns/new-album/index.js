import React, { memo, useEffect } from 'react'

import MRRecHeader from '@/components/rec-header'
import { useDispatch,useSelector } from 'react-redux'
import { getAlubmAction } from '../../store/actionCreaters'

export default memo(function MRNewAlbum() {
  // state
  // redux hooks
  const dispatch = useDispatch()
  const {albums} = useSelector(state => ({
    albums: state.getIn(['recommend', 'albums'])
  }))
  console.log('专辑信息', albums)
  // other hooks
  useEffect(() => {
    dispatch(getAlubmAction())
    return () => {
      
    }
  }, [dispatch])
  return (
    <div>
      <MRRecHeader title="新碟上架"></MRRecHeader>
    </div>
  )
})
