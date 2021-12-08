
import { Map } from 'immutable'

import * as actionTypes from './constants'



const defaultState = Map({
  topBanners: [],
  recommends: [],
  albums: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  settleSingers: [],
  hotAnchors: []
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
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking)  
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)
    case actionTypes.CHANGE_SETTLE_SINGER:
      return state.set('settleSingers', action.settleSingers)  
    case actionTypes.CHANGE_HOT_ANCHOR:
      return state.set('hotAnchors', action.hotAnchors)      
    default:
      return state  
  }
}

export default reducer