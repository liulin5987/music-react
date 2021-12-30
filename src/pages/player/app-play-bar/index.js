import React, { memo, useState, useCallback, useRef } from 'react'

import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { Control, PlayerBarWrapper, PlayInfo, Operator } from './style'
import { shallowEqual, useSelector } from 'react-redux'

export default memo(function MRPlaybar() {
  // state & props
  // 与播放器相关的一些状态，由播放器组件自身自行保存
  const [isPlaying, setIsPlaying] = useState(false)
  // redux hooks
  const {
    currentSong
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)
  // other hooks
  const audioRef = useRef()
  // 其他业务
  const play = useCallback(() => {
    // 切换播放状态
    setIsPlaying(!isPlaying)
    isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(err => {
      setIsPlaying(false)
    })
  }, [isPlaying])
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
                src='https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34'
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
              <Slider tooltipVisible={false}></Slider>
              <div className='time'>
                <span className='now-time'>00:00</span>
                <span className='divider'>/</span>
                <span className='total-time'>04:30</span>
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
      <audio ref={audioRef}></audio>
    </PlayerBarWrapper>
  )
})
