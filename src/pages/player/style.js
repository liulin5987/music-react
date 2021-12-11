import styled from 'styled-components'

import bg1 from '@/assets/img/wrap-bg.png'

export const MRPlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .content {
    background: url(${bg1}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`
export const PlayerLeft = styled.div`
  width: 710px;
`

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`
