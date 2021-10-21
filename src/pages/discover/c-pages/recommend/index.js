import React, { memo } from 'react'
import { getBanners } from '../../../../services/recommend'
import { useEffect } from 'react'

export default memo(function MRRecommend() {
  useEffect(() => {
    getBanners()
    return () => {
      
    }
  }, [])
  return (
    <div>
      MRRecommend
    </div>
  )
})
