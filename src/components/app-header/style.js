import styled from 'styled-components'
import strip_01 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  height: 75px;
  width: 100%;
  background-color: #242424;
  .content {
    height: 70px;
    display: flex;
    .logo {
      display: block;
      width: 177px;
      height: 69px;
      background-position: 0 0;
      text-indent: -9999px;
    }
  }
  .navs {
    display: flex;
    .nav {
      position: relative;
      a {
        display: block;
        padding: 0 19px;
        font-size: 14px;
        color: #ccc;
        height: 70px;
        line-height: 70px;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${strip_01});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
  /* .right {
    flex: 1;
    height: 70px;
    .search {
      width: 158px;
      height: 32px;
      border-radius: 16px;
    }
  } */
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  margin-left: 50px;

  .searchBox {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0 10px;
    box-sizing: border-box;
    input {
      background-color: transparent;
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
`