import styled from 'styled-components'

export const MRSingerEnterWrapper = styled.div`
padding: 20px;
.title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.aritists {
  display: flex;
  flex-direction: column;
  .artist {
    width: 210px;
    height: 62px;
    display: flex;
    .cover {
      width: 62px;
      height: 62px;
    }
    .info {
      padding: 8px 0 8px 14px;
      .name {
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }
      .desc {
        margin-top: 8px;
        font-size: 8px;
        color: #666;
      }
    }
  }
}
`