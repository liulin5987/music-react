import * as actionTypes from './constants'

import { getSongDetail } from '@/services/player'

const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song
})

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    getSongDetail(ids).then(res => {
      console.log('获取到的歌曲信息', res)
      const song = res.songs && res.songs[0]
      if (!song) return
      dispatch(changeCurrentSongAction(song))
    })
    // dispatch(changeCurrentSongAction(song))
  }
}