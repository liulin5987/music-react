import styled from 'styled-components'

import downloadImg from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
background: url(${props => props.bgImage}) center center/6000px;
height: 285px;
background-color: skyblue;
.banner {
  background-color: pink;
  display: flex;
  position: relative;
}
`

export const BannerLeft = styled.div`
width: 730px;
.ant-carousel .slick-dots li button{
  width: 5px;
  height: 5px;
  border-radius: 50%;
}
.banner-item {
  width: 730px;
  height: 285px;
  outline: 1px solid red;
  .image {
    width: 100%;
    height: 100%;
  }
}
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 285px;
  background: url(${downloadImg});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`