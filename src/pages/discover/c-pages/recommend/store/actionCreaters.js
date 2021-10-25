import * as actionTypes from './constants'

import { getBanners } from '../../../../../services/recommend'


// 要传入dispatch的action
const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners
})

export const getTopBannersAction = () => {
  return (dispatch) => {
    getBanners().then((res) => {
      dispatch(changeTopBannersAction(res))
    })
  }
}
