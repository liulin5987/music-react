
import { Map } from 'immutable'

import * as actionTypes from './constants'



const defaultState = Map({
  topBanners: []
})

const reducer = function(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', action.topBanners)
      // console.log('传入的数据', action.topBanners)
      // return {...state, 'topBanners': action.topBanners}
    default:
      return state  
  }
}

export default reducer