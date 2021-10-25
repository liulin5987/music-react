import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

import { getTopBannersAction } from '../../store/actionCreaters'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

export default memo(function MRTopBanners() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // redux相关hook
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.recommend.topBanners
      topBanners: state.getIn(['recommend', 'topBanners'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // 其他hooks
  const bannerRef = useRef()

  useEffect(() => {
    dispatch(getTopBannersAction())
    return () => {}
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0)
  },[])

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect='fade' autoplay={true} ref={bannerRef} beforeChange={bannerChange}>
           {
             topBanners.map(item => (
               <div className="banner-item" key={item.targetId}>
                 <img src={item.imageUrl} alt="" className="image" />
               </div>
             ))
           }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
