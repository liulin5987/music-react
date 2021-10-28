import * as actionTypes from './constants'

import { getBanners, getRecommend } from '../../../../../services/recommend'


// 要传入dispatch的action，标准意义上的action
const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners
})
const changeRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends: res.result
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