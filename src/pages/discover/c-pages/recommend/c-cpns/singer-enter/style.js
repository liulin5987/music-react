import styled from 'styled-components'

export const MRSingerEnterWrapper = styled.div`
padding: 20px;
background-color: #fff;
.title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.artists {
  display: flex;
  flex-direction: column;
  .artist {
    width: 210px;
    height: 62px;
    display: flex;
    border: 1px solid #e9e9e9;
    margin-top: 14px;
    background-color: #fafafa;
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
.apply {
  width: 210px;
  height: 30px;
  margin-top: 14px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  cursor: pointer;
  background: #fff;
  &:hover {
    background: #fafafa;
  }
}
`