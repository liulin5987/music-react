import React, { memo, useState, useCallback, useRef, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Slider } from 'antd'
import { Control, PlayerBarWrapper, PlayInfo, Operator } from './style'
import MRPlayPanel from '../app-play-panel/index'

import { getPlaySong, formatMinuteSecond, getSizeImage } from '@/utils/format-utils'
import { getSongDetailAction } from '../store/actionCreators'
import { useDispatch } from 'react-redux'

export default memo(function MRPlaybar() {
  // state & props
  // 与播放器相关的一些状态，由播放器组件自身自行保存
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  // redux hooks
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  // other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(1901371647))
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
    setDuration(currentSong.dt)
  }, [currentSong])
  // 其他业务
  const play = useCallback(() => {
    // 切换播放状态
    setIsPlaying(!isPlaying)
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => {
          setIsPlaying(false)
        })
  }, [isPlaying])

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime
    // 如果不是通过进度条调整
    if (!isChanging) {
      setCurrentTime(currentTime)
      setProgress(((currentTime * 1000) / duration) * 100)
    }
  }

  const sliderChange = useCallback(
    (value) => {
      setProgress(value)
      const time = ((value / 100) * duration) / 1000
      setCurrentTime(time)
      setIsChanging(true)
    },
    [duration]
  )
  const sliderAfterChange = useCallback(
    (value) => {
      const time = value / 100 * duration / 1000
      audioRef.current.currentTime = time
      setCurrentTime(time)
      setIsChanging(false)
      if (!isPlaying) {
        play()
      }
    },
    [duration, isPlaying, play],
  )
  return (
    <PlayerBarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_player btn prev'></button>
          <button
            className='sprite_player btn play'
            onClick={(e) => play()}
          ></button>
          <button className='sprite_player btn next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to='/discover/player'>
              <img
                src={getSizeImage(currentSong.al.picUrl, 34)}
                alt=''
              />
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <div className='song-name'>{currentSong.name}</div>
              <div className='singer-name'>{currentSong.ar[0].name}</div>
            </div>
            <div className='progress'>
              <Slider
                value={progress}
                tooltipVisible={false}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              ></Slider>
              <div className='time'>
                <span className='now-time'>
                  {formatMinuteSecond(currentTime * 1000)}
                </span>
                <span className='divider'>/</span>
                <span className='total-time'>
                  {formatMinuteSecond(duration)}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop'></button>
            <button className='sprite_player btn playlist'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
      <MRPlayPanel />
    </PlayerBarWrapper>
  )
})
