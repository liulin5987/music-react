import React, { memo } from 'react'
// import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// import { getBanners } from '../../../../services/recommend'
// import { getTopBannersAction } from './store/actionCreaters'
import MRTopBanners from './c-cpns/top-banners'

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
