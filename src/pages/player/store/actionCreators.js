import * as actionTypes from './constants'

import { getSongDetail } from '@/services/player'
import { getLyric } from '../../../services/player'
import { parseLyric } from '../../../utils/lrc-parse'

const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeLyricsAction = (lyrics) => ({
  type: actionTypes.CHANGE_LYRIC,
  lyrics
})

// 切换歌词index
export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

// 切换播放模式
export const changePlaySequenceAction = (currentSequence) => {
  if (currentSequence === 3) currentSequence = 0
  return {
    type: actionTypes.CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence
  }
}

// 切歌操作，根据播放模式进行切歌
export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1.获取基础数据
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    const playSequence = getState().getIn(["player", "playSequence"])
    const playList = getState().getIn(["player", "playList"])

    // 2.对当前播放列表的长度进行判断
    switch (playSequence) {
      case 1:
        let index = Math.floor(Math.random() * playList.length)
        // 如果随机数与传入的值一致，重新随机
        while (index === currentSongIndex) {
          index = Math.floor(Math.random() * playList.length)
        }
        currentSongIndex = index
        break
      default:
        currentSongIndex += tag
        if (currentSongIndex === playList.length) currentSongIndex = 0
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1

    }

    // 3.修改redux中的数据
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeCurrentSongAction(currentSong))

    // 获取当前的歌词，并进行格式化
    getLyric(currentSong.id).then(res => {
      const lrcString = res.lrc.lyric
      const lyrics = parseLyric(lrcString)
      dispatch(changeLyricsAction(lyrics))
    })
  }
}
// 新增歌曲时的操作，根据是否存在进行添加
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 判断歌曲是否在播放列表中, getState，用来获取state中的数据
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)
    if (songIndex !== -1) {
      // 如果已存在，将当前的歌曲和index更换为传入的歌曲
      const currentSong = playList[songIndex]
      dispatch(changeCurrentSongIndexAction(songIndex))
      dispatch(changeCurrentSongAction(currentSong))
    } else {
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0]
        if (!song) return
        // 1.添加到playList中 浅复制之后传入state中，react的赋值方式
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
        // 2.新歌传入，更改当前播放歌曲，和当前index为列表的最后一位
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
      })
    }
    // 获取歌词，并解析传入redux中
    getLyric(ids).then(res => {
      const lrcString = res.lrc.lyric
      const lyrics = parseLyric(lrcString)
      dispatch(changeLyricsAction(lyrics))
    })
    // dispatch(changeCurrentSongAction(song))
  }
}

