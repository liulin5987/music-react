
import { Map } from 'immutable'

import * as actionTypes from './constants'



const defaultState = Map({
  topBanners: [],
  recommends: [],
  albums: []
})

const reducer = function(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', action.topBanners)
      // console.log('传入的数据', action.topBanners)
      // return {...state, 'topBanners': action.topBanners}
    case actionTypes.CHANGE_RECOMMENDS:
      return state.set('recommends', action.recommends)
    case actionTypes.CHANGE_ALBUM:
      return state.set('albums', action.albums)
    default:
      return state  
  }
}

export default reducer