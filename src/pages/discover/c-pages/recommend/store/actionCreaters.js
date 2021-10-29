import * as actionTypes from './constants'

import { getBanners, getNewAlbums, getRecommend, getTopList } from '../../../../../services/recommend'


// 要传入dispatch的action，标准意义上的action
const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners
})
const changeRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends: res.result
})
const changeAlbumAction = (res) => ({
  type: actionTypes.CHANGE_ALBUM,
  albums: res.albums
})
const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

// 通过thunk中间件支持后才能使用的异步操作action
export const getTopBannersAction = () => {
  return (dispatch) => {
    getBanners().then((res) => {
      dispatch(changeTopBannersAction(res))
    })
  }
}

export const getRecommendAction = () => {
  return (dispatch) => {
    getRecommend(8).then((res) => {
      dispatch(changeRecommendsAction(res))
    })
  }
}

export const getAlubmAction = () => {
  return (dispatch) => {
    getNewAlbums(10).then((res) => {
      dispatch(changeAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch(idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break
        case 1:
          dispatch(changeNewRankingAction(res))
          break
        case 2:
          dispatch(changeOriginRankingAction(res))
          break
        default:    
      }
    })
  }
}