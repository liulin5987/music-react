import styled from 'styled-components'

export const SongsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-content: space-between;
.song {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  .cover {
    width: 140px;
    height: 140px;
  }
  .title {
    width: 140px;
    height: 38px;
    font-size: 14px;
  }
}
`