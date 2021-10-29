import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MRRecHeader from '@/components/rec-header'
import { getAlubmAction } from '../../store/actionCreaters'
import { Carousel } from 'antd'
import MRAlbum from '../../../../../../components/mr-album'
import { AlbumsWrapper } from './style'

export default memo(function MRNewAlbum() {
  // state
  // redux hooks
  const dispatch = useDispatch()
  const { albums } = useSelector((state) => ({
    albums: state.getIn(['recommend', 'albums'])
  }))
  console.log('专辑信息', albums)
  // other hooks
  const pageRef = useRef()
  useEffect(() => {
    dispatch(getAlubmAction())
    return () => {}
  }, [dispatch])
  return (
    <AlbumsWrapper>
      <MRRecHeader title='新碟上架'></MRRecHeader>
      <div className='content'>
        <button
          className='arrow arrow-left sprite_02'
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className='album-wrapper'>
          <Carousel dots={false} ref={pageRef}>
            {[0, 5].map((item) => {
              return (
                <div className='albums'>
                  {albums.slice(item, item + 5).map((aItem) => {
                    return (
                      <MRAlbum
                        info={aItem}
                        key={aItem.id}
                        size={100}
                        width={118}
                        bgp='-570px'
                      ></MRAlbum>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumsWrapper>
  )
})
