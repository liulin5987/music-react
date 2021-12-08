import styled from 'styled-components'

import footer_2 from '@/assets/img/sprite_footer_02.png'

export const MRFooter = styled.div`
  width: 100%;
  height: 173px;
  background-color: #f2f2f2;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  .content {
    display: flex;
    justify-content: space-between;
  }
`
export const MRFooterRight = styled.div`
  width: 520px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  .policy {
    display: flex;
    color: #666;
    height: 24px;
    a {
      color: #999;
    }
    .line {
      margin: 0 8px 0 10px;
      color: #c2c2c2;
    }
  }
  .seq {
    height: 24px;
    a {
      color: #666;
    }
  }
  .mr14 {
    margin-right: 14px;
  }
`
export const MRFooterLeft = styled.div`
  width: 420px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${footer_2});
      background-size: 110px 450px;
    }
    span {
      margin: 5px 0 0 0;
      font-size: 10px;
      color: #999;
    }
    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }
  }
`
