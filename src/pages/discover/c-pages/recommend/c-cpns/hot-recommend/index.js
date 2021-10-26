import React, { memo } from 'react'

import MRRecHeader from '@/components/rec-header'

export default memo(function MRHotRecommend() {
  return (
    <div>
      <MRRecHeader title="热门推荐" sorts={["华语","流行","摇滚","民谣","电子"]}></MRRecHeader>
    </div>
  )
})
