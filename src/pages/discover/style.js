import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
background-color: #f5f5f5;
`
export const DiscoverHeader = styled.div`
  height: 30px;
  width: 100%;
  background-color: #c20c0c;

  a:hover {
    text-decoration: none;
  }
  .navs {
    /* outline: 1px solid black; */
    padding-left: 180px;
    display: flex;
    /* justify-content: space-between; */
    .n-item {
      padding: 4px 17px 0;
      box-sizing: border-box;
      .title {
        padding: 0 13px;
        color: #fff;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
      }
      /* &:hover a,
      &.active {
        border-radius: 10px;
        background-color: #9b0909;
      } */
    }
    .n-item:hover,
    .n-item.active {
      .title {
        border-radius: 10px;
        background-color: #9b0909;
      }
    }
  }
`
