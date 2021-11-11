import React, { memo } from 'react'
// import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// import { getBanners } from '../../../../services/recommend'
// import { getTopBannersAction } from './store/actionCreaters'
import MRTopBanners from './c-cpns/top-banners'
import MRHotRecommend from './c-cpns/hot-recommend'
import MRNewAlbum from './c-cpns/new-album'
import MRRankList from './c-cpns/rank-list'
import MRLogin from './c-cpns/login'
import { Content, ContentRight, ContentLeft } from './style'

function MRRecommend(props) {
  // const { topBanners } = useSelector(state => ({
  //     // topBanners: state.recommend.topBanners
  //     topBanners: state.getIn(['recommend', 'topBanners'])
    
  // }), shallowEqual)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getTopBannersAction())
  //   return () => {
      
  //   }
  // }, [dispatch])
  return (
    <div>
      <MRTopBanners></MRTopBanners>
      <Content className="wrap-v2">
        <ContentLeft>
          <MRHotRecommend></MRHotRecommend>
          <MRNewAlbum></MRNewAlbum>
          <MRRankList></MRRankList>
        </ContentLeft>
        <ContentRight>
          <MRLogin />
        </ContentRight>
      </Content>
      {
        // topBanners.map(item => {
        //   return <div className="banner" key={item.targetId}>{item.targetId}</div>
        // })
      }
    </div>
  )
}

export default memo(MRRecommend)
// function MRRecommend(props) {
//   const { getBanners, topBanners } = props
//   useEffect(() => {
//     getBanners()
//     return () => {
      
//     }
//   }, [getBanners])
//   return (
//     <div>
//       MRRecommend
//       {
//         topBanners.map(item => {
//           return <div className="banner" key={item.targetId}>{item.targetId}</div>
//         })
//       }
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(MRRecommend))
